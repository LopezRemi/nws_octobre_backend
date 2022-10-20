import Users from '../Models/User.js'


export async function createUsers(req, res) {
    try {
        const { name, password, email } = req.body
console.log(name,password,email)
        const newUser = await Users.create({
            name: name,
            password: password,
            email: email
        })
        if (newUser) res.status(200).json({
            message:"utilisateur créer"
        });
    } catch (error) {
        console.log(error);
    }
}


