import multer from 'multer'
import path from 'path'
import fs from 'fs'

const UPLOAD_PATH = path.join(__dirname, '..', '..', 'uploads')

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    if (!fs.existsSync(UPLOAD_PATH)) {
      fs.mkdirSync(UPLOAD_PATH)
    }

    callback(null, UPLOAD_PATH)
  },
  filename: (request, file, callback) => {
    const random = Math.round(Math.random() * 1E9)
    const uniqueSuffix = `${Date.now()}-${random}`

    callback(null, file.originalname + '-' + uniqueSuffix)
  }
})

export { storage }
