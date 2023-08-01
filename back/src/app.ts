import express from 'express'
import cors from 'cors'
import helpmet from 'helmet'
import {config} from 'dotenv'
import morgan from 'morgan'
import {PrismaClient} from '@prisma/client'
import {v1} from './routes/v1.route'

config()


const app = express()
const prisma = new PrismaClient()
app.use(cors())
app.use(helpmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('files'))
app.use('/v1', v1)

export {app, prisma}