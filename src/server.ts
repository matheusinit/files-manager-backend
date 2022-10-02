import express from 'express'
import cors from 'cors'
import router from './routes'
import { AppDataSource } from './database'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(cors())
  app.use(router)
  app.use(express.json())

  app.listen(process.env.PORT, () => console.log('Server listenning...'))
}).catch((error) => {
  console.log(error)
})
