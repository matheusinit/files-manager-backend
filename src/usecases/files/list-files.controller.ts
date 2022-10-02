import { Request, Response } from 'express'
import { File } from '../../entities/File'
import { AppDataSource } from '../../database'

class ListFilesController {
  async handle (request: Request, response: Response): Promise<Response> {
    const repository = AppDataSource.getRepository(File)

    const files = await repository.find()

    return response.json(files)
  }
}

export default ListFilesController
