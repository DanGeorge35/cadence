/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
import fs from 'fs'
import Transactions from '../../models/transactions.model'
import TransactionsValidation from './transactions.validation'
import { IncomingForm } from 'formidable'
import { RenameUploadFile, getUIDfromDate, adjustFieldsToValue } from '../../libs/utils/app.utility'
import Investments from '../../models/investments.model'

class TransactionsController {
  /**
 * Create Transactions Endpoint.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  public static async createTransactions (req: any, res: any, next: any): Promise<any> {
    const form = new IncomingForm({ multiples: false })
    form.parse(req, async (err, fields, files) => {
      try {
        if (err) {
          return res
            .status(400)
            .json({ success: false, code: 400, message: 'Error parsing the request' })
        }
        const dir = '/public/transactions'
        if (!fs.existsSync(`.${dir}`)) {
          fs.mkdirSync(`.${dir}`)
        }
        const data: any = adjustFieldsToValue(fields)
        const validate = await TransactionsValidation.validateCreateTransactions(data)

        if (validate.result === 'error') {
          const result: { code: number, message: string } = {
            code: 400,
            message: validate.message
          }
          return res.status(result.code).send(result)
        }

        const DID = getUIDfromDate()

        if (files.photo !== undefined) {
          const photo = files.photo[0]
          data.photo = RenameUploadFile(photo, `${dir}/${DID}-PHOTO`)
        }
        if (files.photo === undefined) {
          return res.status(400).send({ code: 400, message: 'photo must be uploaded' })
        }

        const newTransactions = await Transactions.create({ ...data })
        const singleInvestments = await Investments.findOne({ where: { id: data.investmentId } })

        if (singleInvestments !== null) {
          await singleInvestments.update({ Status: 'Awaiting Approval' })
        }

        return res.status(201).json({ success: true, data: newTransactions })
      } catch (error: any) {
        const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
        console.error(error)
        return res.status(400).send(err)
      }
    })
  }

  /**
 * Single Transactions
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async getSingleTransactions (req: any, res: any, next: any): Promise<any> {
    try {
      const { id } = req.params

      const singleTransactions = await Transactions.findOne({ where: { id } })

      if (!singleTransactions) {
        return res.status(400).json({ success: false, data: `No Transactions with the id ${req.params.id}` })
      }

      return res.status(200).json({ success: true, data: singleTransactions })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  /**
 * Get All Transactions
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async getallTransactions (req: any, res: any, next: any): Promise<any> {
    const PAGE_SIZE = 10

    try {
      let page: number = 1

      if (req.query.page && typeof req.query.page === 'string') {
        page = parseInt(req.query.page, 10)
      }

      const allTransactions = await Transactions.findAndCountAll({
        limit: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE
      })

      const totalPages = Math.ceil(allTransactions.count / PAGE_SIZE)

      return res.status(200).json({
        success: true,
        data: allTransactions.rows,
        pagination: {
          currentPage: page,
          totalPages,
          pageSize: PAGE_SIZE
        }
      })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  /**
 * Update Transactions
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async updateTransactions (req: any, res: any, next: any): Promise<any> {
    try {
      const transactionsId = req.params.id
      const updatedInfo = req.body

      const transactions = await Transactions.findByPk(transactionsId)

      if (!transactions) {
        return res.status(404).json({ success: false, message: 'Transactions not found' })
      }

      const dtransactions = await transactions.update(updatedInfo)

      return res.status(200).json({ success: true, data: dtransactions, message: 'Transactions information updated' })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  /**
 * Delete Transactions
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async deleteTransactions (req: any, res: any, next: any): Promise<any> {
    try {
      const transactionsId = req.params.id

      const transactions = await Transactions.findByPk(transactionsId)

      if (!transactions) {
        return res
          .status(404)
          .json({ success: false, message: 'Transactions not found' })
      }

      await transactions.destroy()

      return res.status(200).json({ success: true, message: 'Transactions deleted' })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }
}

export default TransactionsController
