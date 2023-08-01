import {Request,Response, NextFunction} from 'express'
import {jwtVerify} from 'jose'
import {secretKey} from '../utils/general'

export async function JWTVerification(req:Request, res:Response, nxt:NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]
    try {
    const {payload} = await jwtVerify(token as string, secretKey)
    console.log(payload)
    nxt()
    } catch (err) {
        res.status(401).json({message: 'Unauthorized', err: err})
    }
}
export async function AdminJWTRoleVerifycation(req:Request, res:Response, nxt:NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]
    try {
    const {payload} = await jwtVerify(token as string, secretKey)
    if(payload.role !== 'admin') return res.status(401).json({message: 'Unauthorized'})
    else return res.status(200).json({message: 'Authorized'})
    nxt()
    } catch (err) {
        res.status(401).json({message: 'Unauthorized', err: err})
    }
}

//referencia
//https://stackoverflow.com/questions/69126222/how-can-i-create-a-signed-jwt-using-npm-jose-and-then-verify-this-token