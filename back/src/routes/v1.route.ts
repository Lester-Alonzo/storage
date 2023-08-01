import {Router} from 'express'
import {signup, login, Example, GetUserById, UploadFile, GetOneFile, CreateNewDirectory, getDir, DeleteFile, DeleteDirectory, ChangeName} from '../controllers/v1.controller'
import {JWTVerification} from '../utils/middleware'
import multer from 'multer'
import {join} from 'path'



const storage = multer.diskStorage({
destination: (req, file, cb) => {
    // La función destination determina la carpeta de destino según la solicitud.
    // En este ejemplo, utilizamos un query parameter llamado "folder" para elegir la carpeta.
    const folder = req.query.folder; // Si no se proporciona un valor, se usa 'uploads' por defecto.
    const uploadPath = join(__dirname, `../../files/${folder || 'uploads'}`);
    cb(null, uploadPath);
  },
filename: (req, file, cb) => {
    cb(null, file.originalname);
}
})


const upload = multer({storage})

const v1 = Router()
//auth
v1.post('/login', login)
v1.post('/signup', signup)

//file actions
v1.post('/upload', upload.array('file', 500), UploadFile) // need a ?folder=id
v1.get('/getstorage')
v1.get('/getUser/:id', GetUserById, UploadFile)
v1.post('/getfile', GetOneFile)
v1.post('/createdir', CreateNewDirectory)
v1.post('/getdir', getDir) //?dir="id|directory"

v1.delete('/deletefile', DeleteFile)
v1.delete('/deletedir', DeleteDirectory)

v1.put('/changename', ChangeName)

export {v1}