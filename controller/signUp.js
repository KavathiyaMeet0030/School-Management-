import signUpModel from "../model/signUp/signUp.js";

import bcrypt from "bcrypt";

const hashpass = bcrypt.hash('Meet@1234',10, function(err, hash) {
     console.log('====================================');
     console.log( hash);
     console.log('====================================');
});


export const signUp = async (req, res) => {
    const { name, email, password, role } = req.body

    const hassPassword = await bcrypt.hash(password, 10)

    const user = new signUpModel({
        name,
        email,
        password: hassPassword,
        role
    })

    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (err) {
        res.status(400).send(err)
    }
}   
