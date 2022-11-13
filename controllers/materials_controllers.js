import Loan from '../Models/Loan.js';
import Loaners from '../Models/Loaners.js';
import Materials from '../Models/Material.js'



export async function getMaterials(req, res) {
    
    try{
        const materials = await Materials.find()
        res.status(200).json(materials)
    }
    catch(error){
        console.log(error)
    }
}

export async function createMaterials(req, res) {
    try {
        const { name, type } = req.body
        const newMaterial = await Materials.create({
            name: name,
            type: type,
        })
        if (newMaterial) res.status(200).json({
            message: "materiel créé"
        });
    } catch (error) {
        console.log(error);
    }
}

export async function updateMaterials(req, res) {
    try {
        const { id, material } = req.body
        const updatedMaterial = await Materials.findOneAndUpdate({_id: id}, material)
        res.status(200).json({ material: updatedMaterial });
    } catch (error) {
        console.log(error);
    }
}

export async function deleteMaterials(req, res) {
    const materialId = req.params.id;
    try {
        const alreadyLoan = await Loaners.findOne({alreadyTaken: materialId})
        if (alreadyLoan) {
            return res.status(409).json({
                message:"Matériel déja loué rendez le avant de le supprimer !"
            })
        }
        const material = await Materials.findByIdAndDelete(materialId);
        res.send(material);
    } catch (error) {
        console.log(error);
    }
}