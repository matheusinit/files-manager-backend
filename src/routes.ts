import { Router } from 'express'
import multer from 'multer'

import { storage } from './utils/upload'

import UploadFilesController from './usecases/files/upload-files.controller'
import ListFilesController from './usecases/files/list-files.controller'
import { DeleteFilesController } from './usecases/files/delete-files.controller'
import GetFileController from './usecases/files/get-file.controller'

const upload = multer({ storage })

const uploadFilesController = new UploadFilesController()
const listFilesController = new ListFilesController()
const deleteFilesController = new DeleteFilesController()
const getFileController = new GetFileController()

const router = Router()

router.post('/file', upload.array('files'), uploadFilesController.handle)
router.get('/file', listFilesController.handle)
router.delete('/file/:id', deleteFilesController.handle)
router.get('/file/:id', getFileController.handle)

export default router
