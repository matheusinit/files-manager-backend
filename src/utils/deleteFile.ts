import fs from 'fs'
import path from 'path'

export const deleteFile = (filename: string) => {
  const filePath = path.join(__dirname, '..', '..', 'uploads', filename)

  fs.unlinkSync(filePath)
}
