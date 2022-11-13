import Loans from "../Models/Loan.js"
import date from 'date-and-time'

export async function createLoans(req, res) {
    try {
        const { loanWhen, } = req.body
        const datenow = new Date();
        const newLoan = await Loans.create({
            loanWhen: loanWhen,
            returnDate: date.addDays(datenow, 15),
        })
        if (newLoan) res.status(200).json({
            message: "Location créer"
        });
    } catch (error) {
        console.log(error);
    }
}

export async function deleteLoans(req, res) {
    const loanId = req.params.id;
    try {
        const Loan = await Loans.findByIdAndDelete(loanId);
        res.send(Loan);
    } catch (error) {
        console.log(error);
    }
}

