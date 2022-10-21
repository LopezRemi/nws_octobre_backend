import Loan from '../Models/Loan.js';
import Materials from '../Models/Material.js'

export async function createMaterials(req, res) {
    try {
        const { name, type } = req.body
        const newMaterial = await Materials.create({
            name: name,
            type: type,
        })
        if (newMaterial) res.status(200).json({
            message: "materiel créer"
        });
    } catch (error) {
        console.log(error);
    }
}

export async function updateMaterials(req, res) {
    try {
        const { _id, data } = req.body
        const material = await Materials.findByIdAndUpdate(_id, data)
        res.status(200).json({ material: material });
    } catch (error) {
        console.log(error);
    }
}

export async function deleteMaterials(req, res) {
    const materialId = req.params.id;
    try {
        const material = await Materials.findByIdAndDelete(materialId);
        const alreadyLoan = await Loan.findOne({alreadyTaken: req.body._id})
        if (alreadyLoan) {
            return res.status(200).json({
                message:"Matériel déja loué rendez le avant de le supprimer !"
            })
        }
        res.send(material);
    } catch (error) {
        console.log(error);
    }
}