/* eslint-disable @typescript-eslint/no-extraneous-class */
import Joi from 'joi'

const schema = Joi.object({
  investorId: Joi.string().required().min(1),
  Amount: Joi.string().required().min(1),
  Duration: Joi.string().required().min(1)
})
// name : Joi.any().optional(); // for optional entry

class InvestmentsValidation {
  static async validateCreateInvestments (data: any): Promise<any> {
    const { error, value } = schema.validate(data)
    if (error != null) {
      error.details[0].message = error.details[0].message.replace(/\\|"|\\/g, '')
      return { result: 'error', message: error.details[0].message }
    }
    return { result: 'success', message: value }
  }
}

export default InvestmentsValidation

/* --------------------------------------------------------- POSTMAN TEST DATA STRUCTURE
 {
    "investorId" : "",
    "Amount" : "",
    "Duration" : "",
  }
--------------------------------------------------------- POSTMAN TEST DATA STRUCTURE */
