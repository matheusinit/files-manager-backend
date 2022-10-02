import { Request, Response } from 'express'
import { AppDataSource } from '../../database'
import { File } from '../../entities/File'

class UploadFilesController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { files } = request

    const myFiles = JSON.parse(JSON.stringify(files))

    if (files === undefined) {
      return response.status(400).send({ error: 'Any file included' })
    }

    const fileRepository = AppDataSource.getRepository(File)

    const filesSaved: File[] = []

    const promises = myFiles.map(async (file: any) => {
      const { originalname, size, filename, mimetype } = file

      const newFile = fileRepository.create({ originalName: originalname, filename, type: mimetype, size })

      filesSaved.push(newFile)

      return await fileRepository.save(newFile)
    })

    await Promise.all(promises)

    return response.status(201).json({ files: filesSaved })
  }
}

export default UploadFilesController
