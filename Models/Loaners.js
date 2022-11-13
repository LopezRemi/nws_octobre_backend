import mongoose from 'mongoose';
import Materials from './Material.js';

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
        loanedMaterial:{
            type:mongoose.Schema.Types.ObjectId,
            ref:Materials,
        },
        returnDate: {
            type:Date,
        },
    },{
        timestamps:true
    })
    
    const Loaners = mongoose.model("Loaners",LoanerSchema);
    export default Loaners;
