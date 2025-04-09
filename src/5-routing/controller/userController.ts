import {Request, Response} from 'express';
import UserModels from '../models/userModels';

export const getUser = async (req: Request, res: Response)=>{
    const users = await UserModels.find({})
    res.send(users)
}

export const addUser = async (req: Request, res: Response)=>{
   const dataGotten = await req.body
   console.log(dataGotten)
   res.send("add users")
}

export function updateUser(req: Request, res: Response) {
    res.send('update User')
}


export function deleteUser(req: Request, res: Response) {
    res.send('delete User')
}