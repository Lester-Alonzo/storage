import {Request, Response} from 'express'
import {randomUUID} from 'crypto'
import {prisma} from '../app'
import {mkdir, readdir, rm, rmdir, rename} from 'fs/promises'
import {SignJWT} from 'jose'
import {join} from 'path'
import {secretKey, setPathToFile} from '../utils/general'
import {hash, compare} from 'bcrypt'


export async function Example(req: Request, res: Response) {
    res.json({message: 'Hello World'})
}


export async function login(req: Request, res: Response) {
    const {username, password} = req.body
    try {
    const Cuser = await prisma.user.findFirst({
        where:{
            nombre: username
        }
    })
    const result = await compare(password, (Cuser?.password as string))
    if(!result) return res.status(401).json({message: 'Unauthorized'})
    if(!Cuser) return res.status(404).json({message: 'User not found'})
    if(result) {
        const token = await new SignJWT({id: Cuser.id, role: Cuser.role}).setProtectedHeader({alg: 'HS256'}).setExpirationTime('1d').sign(secretKey)
        res.json({token})
    }
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'})
    }
}
export async function signup(req: Request, res: Response) {
    const nIdUser = randomUUID()
    const {nombre, role, password} = req.body

    const hs = await hash(password, 10)

    const newUser = await prisma.user.create({
        data: {
            id: nIdUser,
            nombre,
            role,
            password:hs
        }
    })
    //const newFolder = new URL(`../../files/${nIdUser}`, import.meta.url)
    const baseurl = join(__dirname, `../../files/${nIdUser}`)
    const createDir = await mkdir(baseurl, {recursive:true})
    const token = await new SignJWT({id: newUser.id, role: newUser.role}).setProtectedHeader({alg: 'HS256'}).setExpirationTime('1h').sign(secretKey)
    // res.setHeader('Authorization', `Bearer ${token}`)
    // res.cookie('token', token, {httpOnly: true, secure: true})
    res.json({token})
}
export async function GetUserById(req: Request, res: Response) {
    const {id} = req.params
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
    let filse = await readdir(join(__dirname, `../../files/${id}`))
    let final = await setPathToFile(filse, id)
    console.log(final)
    res.json({
        user: user,
        files: final
    })
}


export async function getDir(req: Request, res: Response) {
    const {path} = req.body
    try {
    let filse = await readdir(join(__dirname, `../../files/${path}`))
    console.log(filse)

    if(filse.length == 0) return res.json({
        files: filse
    })

    let final = await setPathToFile(filse, (path as string))
    console.log(final)
    res.json({
        files: final
    })
    } catch (error) {
     console.log(error)   
    }
}

export async function GetOneFile(req:Request, res:Response) {
    const {paths} = req.body
    const path = join(__dirname, paths)
    res.sendFile(path)
}
export async function UploadFile(req:Request, res:Response) {
    console.log("all data to upload",req.file, req.body)
    res.json({message: 'File uploaded'})
}
export async function CreateNewDirectory(req:Request, res:Response) {
    const {path} = req.body
    console.log(path)
    const baseurl = join(__dirname, `../../files/${path}`)
    const createDir = await mkdir(baseurl, {recursive:true})
    res.json({message: 'Directory created'})
}
export async function DeleteFile(req:Request, res:Response) {
    const {path} = req.body
    try {
        const baseurl = join(__dirname, `../../files/${path}`)
        const deleteDir = await rm(baseurl, {recursive:true})
        res.json({message: 'Directory deleted'})
    } catch (err) {
        console.log(err)
    }
}
export async function DeleteDirectory(req:Request, res:Response) {
    const {path} = req.body
    try {
        const baseurl = join(__dirname, `../../files/${path}`)
        const deleteDirec = await rmdir(baseurl, {recursive:true})
        res.json({message: 'Directory deleted'})
    } catch (err) {
        console.log(err)
    }
}
export async function ChangeName(req:Request, res:Response) {
    const {oldpath, newpath} = req.body
    try {
        const old = join(__dirname, `../../files/${oldpath}`)
        const nueva = join(__dirname, `../../files/${newpath}`)
        const newname = await rename(old, nueva)
        res.json({message: 'Directory deleted'})
    } catch (err) {
        console.log(err)
    }
}
    