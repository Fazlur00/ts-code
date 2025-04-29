import bcrypt from 'bcryptjs';
const hashSalt = 10

export const encryptText = async (inputText:string)=>{
    const genSalt =  bcrypt.genSaltSync(hashSalt)
    const hashedText = bcrypt.hashSync(inputText, genSalt)
    return hashedText
}


export const compareText = async (inputText:string, hashedText:string)=>{
    const isMatch = await bcrypt.compare(inputText, hashedText)
    return isMatch
}