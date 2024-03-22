/* eslint-disable @typescript-eslint/no-extraneous-class */
import Joi from 'joi'

const checkSchema = Joi.object({
  Email: Joi.string().email().required()

})

const createSchema = Joi.object({
  Email: Joi.string().email().required(),
  Password: Joi.string().required().min(1),
  FullName: Joi.string().required().min(1),
  Whatsapp: Joi.string().required().min(1)
})
// name : Joi.any().optional(); // for optional entry

class referralValidation {
  static async validateCheckReferral (data: any): Promise<any> {
    const { error, value } = checkSchema.validate(data)
    if (error != null) {
      error.details[0].message = error.details[0].message.replace(/\\|"|\\/g, '')
      return { result: 'error', message: error.details[0].message }
    }
    return { result: 'success', message: value }
  }

  static async validateCreateReferral (data: any): Promise<any> {
    const { error, value } = createSchema.validate(data)
    if (error != null) {
      error.details[0].message = error.details[0].message.replace(/\\|"|\\/g, '')
      return { result: 'error', message: error.details[0].message }
    }
    return { result: 'success', message: value }
  }
}

export default referralValidation

/* --------------------------------------------------------- POSTMAN TEST DATA STRUCTURE
 {
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
