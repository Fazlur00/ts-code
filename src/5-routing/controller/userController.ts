import {Request, Response} from 'express';
import UserModels from '../models/userModels';

export const getUser = async (req: Request, res: Response)=>{
    const users = await UserModels.find({})
    res.send(users)
}

export const addUser = async (req: Request, res: Response)=>{
    const users = new UserModels(req.body)
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
