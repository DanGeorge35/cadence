import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import fs from 'fs'
import axios from 'axios'
import { type Fields } from 'formidable'

function Authorization (req: any, res: any, next: any): any {
  // eslint-disable-next-line no-unused-vars
  const authHeader = req.headers.authorization
  const token = authHeader?.split(' ')[1]
  if (token == null) return res.status(401).send('Not Authorised')

  // eslint-disable-next-line consistent-return
  const JWT_KEY: any = process.env.jwtkey
  jwt.verify(token, JWT_KEY, (err: any, user: any) => {
    if (err !== null) return res.status(403).send('Invalid Token')
    req.user = user
    next()
  })
}

function GenerateToken (data: any): string {
  const JWT_SECRET: any = process.env.jwtkey
  return jwt.sign({ data }, JWT_SECRET, { expiresIn: '30d' })
}

async function CheckPassword (password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash)
}

async function EncryptPassword (password: string): Promise<string> {
  try {
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
  } catch (error) {
    console.error('Error encrypting password:', error)
    return password
  }
}

async function SendMailJS (templateID: string, templateParams: any): Promise<void> {
  const options = {
    service_id: 'service_vdnsdbq',
    template_id: templateID,
    user_id: 'RCVp1J62LBFzk1i31',
    template_params: templateParams
  }

  const ddata = JSON.stringify(options)

  const config = {
    method: 'post',
    url: 'https://api.emailjs.com/api/v1.0/email/send',
    data: ddata,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  await axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
}

async function SendMail (mail: any): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: 'mail.cadencepub.com',
    port: 465,
    secure: true, // Use secure connection (TLS/SSL)
    auth: {
      user: 'contact@cadencepub.com',
      pass: 'contact001'
    }
  })

  const htmlMessage = `
  <div style="background-color: black;">
    <div style="background-color:black;padding:10px;text-align:center">
      <img src="https://cadencepub.com/logo.png" alt="Cadence" width="143" height="60">
    </div>
    <div style="background-color:white;font-size:15px; padding: 25px; border: 3px solid;">
       Dear ${mail.to_name},<br><br>
      ${mail.message}
      <br>
      <div>
    <div style="text-align: center; background-color: black;color:yellow;padding:5px;font-size:15px">
      <b>Cadence:</b> Dine in Style, Sip with harmony
    </div>
  </div>`

  // Email options
  const mailOptions = {
    from: '"Cadence" <contact@cadencepub.com>',
    to: mail.to_email,
    subject: mail.subject,
    html: htmlMessage
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error != null) {
      console.error('Error:', error.message)
    } else {
      console.log('Email sent:', info.response)
    }
  })
}

function adjustFieldsToValue (
  fieldsObject: Fields<string>
): Record<string, string> {
  const adjustedFields: Record<string, string> = {}

  for (const fieldName in fieldsObject) {
    if (fieldName in fieldsObject) {
      const fieldValue = fieldsObject[fieldName]?.[0] ?? '' // Using optional chaining and nullish coalescing
      adjustedFields[fieldName] = fieldValue
    }
  }
  return adjustedFields
}

function RenameUploadFile (uploadedfile: any, filename: string): string {
  const oldPath = uploadedfile.filepath
  const extension = uploadedfile.originalFilename.substring(
    uploadedfile.originalFilename.lastIndexOf('.')
  )
  const newPath = `.${filename}${extension}`
  const publicPath = `${process.env.DOMAIN}/${process.env.NODE_ENV}${filename}${extension}`
  fs.copyFileSync(oldPath, newPath)
  fs.unlinkSync(oldPath)
  return publicPath
}

function getUIDfromDate (prefix = ''): string {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // Months are zero-based
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const random = (Math.floor(Math.random() * 9) + 1).toString()
  const uniqueNumber =
    year.toString() +
    month.toString() +
    day.toString() +
    hour.toString() +
    minute.toString() +
    second.toString() +
    random.substring(0, 2)
  // uniqueNumber = uniqueNumber.substring(uniqueNumber.length - length);

  if (prefix !== '') {
    return prefix + uniqueNumber.toString() // Append prefix if it is provided
  }
  return `IDN${uniqueNumber.toString()}`
}

export {
  Authorization,
  GenerateToken,
  EncryptPassword,
  CheckPassword,
  RenameUploadFile,
  adjustFieldsToValue,
  getUIDfromDate,
  SendMail,
  SendMailJS
}
