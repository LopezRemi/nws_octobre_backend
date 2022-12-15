import Loaner from '../Models/Loaner.js'
import date from 'date-and-time'
import Materials from '../Models/Material.js'
import nodemailer from "nodemailer"
let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "testreminws@hotmail.com",
      pass: "Azerty123",
    },
  });


export async function createLoaners(req, res) {
    try {
        const { name,email,loanedMaterial } = req.body
console.log(name,email,loanedMaterial)
const material = await Materials.findById(loanedMaterial)
        if (material) {
            if(material.isLoaned){
                return res.json({message:"Matériel emprunté"})
            }
            material.isLoaned = true
            material.save()
        }
        const datenow = new Date
        const newLoaners = await Loaner.create({
            name: name,
            email: email,
            loanedMaterial : loanedMaterial,
            returnDate: date.addDays(datenow, 15),
        })
        if (newLoaners) {
            var message = {
                from: "testreminws@hotmail.com",
                to: newLoaners.email,
                subject: "Un emprunt a été réalisé",
                text: "Bonjour , je vous informe qu'un emprunt a bien été réalisé au sein de la NWS uwu uwu",
                html: "<p>Bonjour , je vous informe qu'un emprunt a bien été réalisé au sein de la NWS</p>",
            };
            //Temporary desactivated to not spam my mailbox
            transporter.sendMail(message);
            res.status(200).json({
            message:"Location créé",loanersData : newLoaners
        });}
    } catch (error) {
        console.log(error);
    }
}

export async function getLoanerByMaterial (req ,res) {
    try {
        const loaner = await Loaner.find({
            loanedMaterial:req.body.materialId
        })
        if(loaner) {
            return res.json({
            data : loaner
            })
        }
    }
    catch(error){
        console.log(error);
    }
}


export async function deleteLoaner(req, res) {
    const LoanerId = req.params.id;
    try {
        const Loaner = await Loaner.findByIdAndDelete(LoanerId);
        res.send(Loaner);
    } catch (error) {
        console.log(error);
    }
}

export async function getByMaterial(req,res){
    try{
        const Loaner = await Loaner.findOne({loanedMaterial:req.body.id})
        res.json({data:Loaner})
    }
    catch(error){
        console.log(error);
    }
}