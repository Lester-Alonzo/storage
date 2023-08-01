import {createSecretKey} from 'crypto'
import {stat} from 'fs/promises'
import {join} from 'path'
export const secretKey = createSecretKey((process.env.JWT_SECRET as string), "utf-8")

export async function setPathToFile(files:string[], id:string):Promise<any> {

        return new Promise(async (resolve, reject) => {
try {
    
    let final= files.map( async (file) => {
        const path = `../../files/${id}/${file}`
        //utiliza el isDirectory para saber si es un directorio o no
        const sst = await stat(join(__dirname, path))
        const isDir = sst.isDirectory()
        return {
            path: path,
            name: file,
            isdirecotiry: isDir
        }
    })
    let esto = await Promise.all(final)
    resolve(esto)
} catch (error) {
    reject(error)
}

        })
}