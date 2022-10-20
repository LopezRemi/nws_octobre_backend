import Materials from '../Models/Material.js'


export async function createMaterials(req, res) {
    try {
        const { name, type } = req.body
        const newMaterial = await Materials.create({
            name: name,
            type: type,
        })
        if (newMaterial) res.status(200).json({
            message:"materiel créer"});
    } catch (error) {
        console.log(error)
    }
}