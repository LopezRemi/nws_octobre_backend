import Loans from '../Models/Loan.js'
import Loaners from '../Models/Loaners.js'
import date from 'date-and-time'
import Materials from '../Models/Material.js'


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
        const newLoaners = await Loaners.create({
            name: name,
            email: email,
            loanedMaterial : loanedMaterial,
            returnDate: date.addDays(datenow, 15),
        })
        if (newLoaners) {
            res.status(200).json({
            message:"Location créé",loanersData : newLoaners
        });}
    } catch (error) {
        console.log(error);
    }
}

export async function getLoanerByMaterial (req ,res) {
    try {
        const loaner = await Loaners.find({
            loanedMaterial:req.body.materialId
        })
        if(loaner) {
            return res.json({
            data : loaner
            })
        }
    }
    catch {

    }
}


export async function deleteLoaner(req, res) {
    const LoanerId = req.params.id;
    try {
        const Loaner = await Loaners.findByIdAndDelete(LoanerId);
        res.send(Loaner);
    } catch (error) {
        console.log(error);
    }
}

