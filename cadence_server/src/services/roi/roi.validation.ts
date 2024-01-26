/* eslint-disable @typescript-eslint/no-extraneous-class */
import Joi from 'joi'

const schema = Joi.object({
  investmentId: Joi.string().required().min(1),
  investorId: Joi.string().required().min(1),
  percentage: Joi.string().required().min(1),
  returns: Joi.string().required().min(1)
})
// name : Joi.any().optional(); // for optional entry

class RoiValidation {
  static async validateCreateRoi (data: any): Promise<any> {
    const { error, value } = schema.validate(data)
    if (error != null) {
      error.details[0].message = error.details[0].message.replace(/\\|"|\\/g, '')
      return { result: 'error', message: error.details[0].message }
    }
    return { result: 'success', message: value }
  }
}

export default RoiValidation

/* --------------------------------------------------------- POSTMAN TEST DATA STRUCTURE
 {
    "investmentId" : "",
    "investorId" : "",
    "percentage" : "",
    "returns" : "",
  }
--------------------------------------------------------- POSTMAN TEST DATA STRUCTURE */
