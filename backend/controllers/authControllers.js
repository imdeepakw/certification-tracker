import { User } from "../models/Users.js";
import bcrypt from 'bcrypt'
import { createAccessToken } from "../config/jwt.js";

export const register = async (req, res) => {
    const {username, email, password} = req.body
    try {

        const hashPassword = await bcrypt.hash(password,11)

        const newUser = new User({
            username, 
            email, 
            password: hashPassword
        })

        const savedUser = await newUser.save()
        
        const token = await createAccessToken(savedUser._id)
        res.cookie('token', token)
        res.status(201).json({
            id: savedUser._id,
            email: savedUser.email, 
            username: savedUser.username 
        })
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    try {
        
        const userFound = await User.findOne({email})
        

        if(!userFound) return res.status(404).json({message: 'User not found'});

        const isMatch = await bcrypt.compare(password, userFound.password)

        if(!isMatch) return res.status(401).json({message: 'Invalid credentials'});

        const token = await createAccessToken({id: userFound._id})

        res.cookie('token', token)
        return res.status(201).json({message: 'Logged in successfully!'})

    } catch (error) {
     console.log(error)   
    }
}

export const logout = (req, res) => {

}