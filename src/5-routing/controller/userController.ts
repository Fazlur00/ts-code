import {Request, Response} from 'express';
import UserModels from '../models/userModels';
import {encryptText,compareText} from '../../utils/crypto';
import { createToken, validateToken } from '../../utils/jwt';

export const getUser = async (req: Request, res: Response) =>{
    try{
    console.log("triggered")
    const auth = await req.headers.authorization  || '';
    if(!auth) {
        res.status(401).json({
            error: true,
            message: "Unauthorized",
        })
    }
    const token = await auth.split(" ")[1]
    const isValid = await validateToken(token)
    console.log("isValid", isValid)
    if(!isValid) {
        res.status(401).json({
            error: true,
            message: "Unauthorized",
        })
    }
    const users = await UserModels.find({})
    res.send(users)
    }catch(err : any){
        res.status(400).json({
            error: true,
            message: err.message,
        })
    }
}

export const addUser = async (req: Request, res: Response)=>{
    const users = new UserModels(req.body)
    const originalPassword = req.body?.password 
    users.password = await encryptText(originalPassword)
    try{
        await users.save()
        res.status(200).json({
            error: false,
            message: "User added successfully",
        })
    } catch(err : any){
        res.status(400).json({
            error: true,
            message: err.message,
        })
    }
}

export const loginUser = async (req: Request, res: Response) : Promise<any> =>{
    try{
        const userEmail = await req.body.email
        const userPassword = await req.body.password
        const users = await UserModels.find({email: userEmail})

        if(!users.length) {
            return res.status(400).json({
                error: true,
                message: "User not found",
            })
        }
        const isMatch = await compareText(userPassword, users[0].password)
        if(!isMatch) {
            return res.status(400).json({
                error: true,
                message: "Incorrect Email or Password",
            })
        }
        const tokenJWT = await createToken(users[0]._id)
        res.status(200).json({
            error: false,
            token: tokenJWT,
        })
    } catch(err : any){
        res.status(400).json({
            error: true,
            message: err.message,
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const {id, data} = await req.body
    try{
        const updatedUser = await UserModels.findByIdAndUpdate(id, data, {new: true})
        if (!updatedUser) {
            res.status(404).json({ error: true, message: "User not found" });
        }
        res.status(200).json(updatedUser)
    } catch(err : any){
        res.status(400).json({
            error: true,
            message: err.message,
        })
    }
}


export const deleteUser = async (req: Request, res: Response) => {
    const {id} = await req.body
    try{
        const deletedUser = await UserModels.findByIdAndDelete(id)
        if (!deletedUser) {
            res.status(404).json({ error: true, message: "User not found" });
        }
        res.status(200).json(deletedUser)
    } catch(err : any){
        res.status(400).json({
            error: true,
            message: err.message,
        })
    }
}
