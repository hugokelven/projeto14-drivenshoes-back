import express, {json} from 'express'
import cors from 'cors'
import chalk from 'chalk'
import dotenv from "dotenv"

import productsRouter from './routes/productsRouter.js'

const app = express()
app.use(cors())
app.use(json())
dotenv.config()

app.use(productsRouter)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(chalk.bold.green(`Aplicação rodando na porta ${port}`))
})