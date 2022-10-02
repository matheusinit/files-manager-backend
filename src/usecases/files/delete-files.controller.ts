import { Request, Response } from 'express'
import { AppDataSource } from '../../../src/database'
import { File } from '../../entities/File'
import { deleteFile } from '../../utils/deleteFile'

export class DeleteFilesController {
  async handle (request: Request, response: Response) {
    const { id } = request.params

    const repository = AppDataSource.getRepository(File)

    const file = await repository.findOne({ where: { id } })

    if (file == null) {
      return response.status(404).json({ error: 'File not found' })
    }

    deleteFile(file.filename)

    await repository.remove(file)

    return response.status(200).json({ message: 'File removed' })
  }
}
