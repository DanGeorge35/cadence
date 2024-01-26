/* eslint-disable @typescript-eslint/no-extraneous-class */
import Joi from 'joi'

const schema = Joi.object({
  FullName: Joi.string().required().min(1),
  Email: Joi.string().required().min(1)
})
// name : Joi.any().optional(); // for optional entry

class AdminValidation {
  static async validateCreateAdmin (data: any): Promise<any> {
    const { error, value } = schema.validate(data)
    if (error != null) {
      error.details[0].message = error.details[0].message.replace(/\\|"|\\/g, '')
      return { result: 'error', message: error.details[0].message }
    }
    return { result: 'success', message: value }
  }
}

export default AdminValidation

/* --------------------------------------------------------- POSTMAN TEST DATA STRUCTURE
 {
    "UserID" : "",
    "FullName" : "",
    "Email" : "",
  }
--------------------------------------------------------- POSTMAN TEST DATA STRUCTURE */
