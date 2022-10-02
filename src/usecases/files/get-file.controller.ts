import { Request, Response } from 'express'
import path from 'path'
import { AppDataSource } from '../../../src/database'
import { File } from '../../../src/entities/File'

class GetFileController {
  async handle (request: Request, response: Response) {
    const { id } = request.params

    const repository = AppDataSource.getRepository(File)

    const file = await repository.findOne({ where: { id } })

    if (file == null) {
      return response.status(404).send({ error: 'File not found' })
    }

    const uploadsPath = path.join(__dirname, '..', '..', '..', 'uploads')

    const filePath = path.join(uploadsPath, file.filename)

    return response.status(200).download(filePath)
  }
}

export default GetFileController
