/* eslint-disable @typescript-eslint/no-extraneous-class */
import Joi from 'joi'

const schema = Joi.object({
  investorId: Joi.string().required().min(1),
  investmentId: Joi.string().required().min(1),
  amount: Joi.string().required().min(1),
  photo: Joi.any().optional()
})
// name : Joi.any().optional(); // for optional entry

class TransactionsValidation {
  static async validateCreateTransactions (data: any): Promise<any> {
    const { error, value } = schema.validate(data)
    if (error != null) {
      error.details[0].message = error.details[0].message.replace(/\\|"|\\/g, '')
      return { result: 'error', message: error.details[0].message }
    }
    return { result: 'success', message: value }
  }
}

export default TransactionsValidation

/* --------------------------------------------------------- POSTMAN TEST DATA STRUCTURE
  investorId
  investmentId
  amount
  photo
--------------------------------------------------------- POSTMAN TEST DATA STRUCTURE */
