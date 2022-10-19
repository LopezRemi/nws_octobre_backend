import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            // unique:[true,'Entrez votre email']
        },
        email:{
            type: String,
            // required: true
        },
        password:{
            type: String,
            // required: [true,'Veuillez tapez un mot de passe']
        },
        token:{
            type:String,
        },
    },{
        timestamps:true
    })
    
    const Users = mongoose.model("users",UserSchema);
    export default Users;
