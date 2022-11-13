import mongoose from 'mongoose';

const LoanerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            // unique:[true,'Entrez votre email']
        },
        email:{
            type: String,
            // required: true
        },
        token:{
            type:String,
        },
    },{
        timestamps:true
    })
    
    const Loaners = mongoose.model("Loaners",LoanerSchema);
    export default Loaners;
