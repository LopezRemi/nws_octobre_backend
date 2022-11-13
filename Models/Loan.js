import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema(
    {
        loanWhen: {
            type: Date, default: Date.now ,
        },
        returnDate: {
            type:Date,
        },
    },{
        timestamps:true
    })
    
    const Loans = mongoose.model("loans",LoanSchema);
    export default Loans;
