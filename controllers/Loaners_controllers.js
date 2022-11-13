import Loaners from '../Models/Loaner.js'


export async function createLoaners(req, res) {
    try {
        const { name,email } = req.body
console.log(name,email)
        const newLoaners = await Loaners.create({
            name: name,
            email: email
        })
        if (newLoaners) res.status(200).json({
            message:"Loueur créer"
        });
    } catch (error) {
        console.log(error);
    }
}


