/* eslint-disable @typescript-eslint/no-extraneous-class */
import Joi from 'joi'

const schema = Joi.object({
  id: Joi.string().required().min(1),
  UserID: Joi.string().required().min(1),
  FullName: Joi.string().required().min(1),
  Email: Joi.string().required().min(1),
  Role: Joi.string().required().min(1),
  Link: Joi.string().required().min(1),
  Whatsapp: Joi.string().required().min(1)
})
// name : Joi.any().optional(); // for optional entry

class workersValidation {
  static async validateCreateWorkers (data: any): Promise<any> {
    const { error, value } = schema.validate(data)
    if (error != null) {
      error.details[0].message = error.details[0].message.replace(/\\|"|\\/g, '')
      return { result: 'error', message: error.details[0].message }
    }
    return { result: 'success', message: value }
  }
}

export default workersValidation

/* --------------------------------------------------------- POSTMAN TEST DATA STRUCTURE
 {
    "id" : "",
    "UserID" : "",
    "FullName" : "",
    "Email" : "",
    "Role" : "",
    "Link" : "",
    "Whatsapp" : "",
    "createdAt" : "",
    "updatedAt" : ""
  }
--------------------------------------------------------- POSTMAN TEST DATA STRUCTURE */
