import multer from 'multer'

const MIME_TYPE: any = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg'
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-')
    const ext = MIME_TYPE[file.mimetype]
    cb(null, name + Date.now() + '.' + ext)
  }
})

const upload = multer({ storage })

export default upload
