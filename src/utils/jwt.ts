import jwt from 'jsonwebtoken';

const jwt_secret = 'selva@2025' 

export const createToken = async (inputText:string)=>{
    return jwt.sign({inputText}, jwt_secret, {expiresIn: '1h'})
}

export const validateToken = async (inputText:string)=>{
    try{
        const decoded = jwt.verify(inputText, jwt_secret)
        return decoded
    }catch(err){
        return false
    }
}