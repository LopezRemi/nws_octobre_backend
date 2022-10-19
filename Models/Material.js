import mongoose from 'mongoose';

const MaterialSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        type: {
            type: String,
        },
        token:{
            type:String,
        },
    },{
        timestamps:true
    })
    
    const Materials = mongoose.model("materials",MaterialSchema);
    export default Materials;
