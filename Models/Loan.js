import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema(
    {
        userLoaner: {
            type: String,
        },
        materialLoan: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Material' }]
        },
        loanWhen: {
            type: Date, default: Date.now ,
        },
        returnDate: {
            type:Date,
        },
        token:{
            type:String,
        },
    },{
        timestamps:true
    })
    
    const Loans = mongoose.model("loans",LoanSchema);
    export default Loans;
