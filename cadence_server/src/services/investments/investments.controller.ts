/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
import moment from 'moment'
import Investments from '../../models/investments.model'
import InvestmentsValidation from './investments.validation'
import Transactions from '../../models/transactions.model'
import Rois from '../../models/rois.model'
import Systems from '../../models/systems.model'

class InvestmentsController {
  /**
 * Create Investments
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async approveInvestment (req: any, res: any, next: any): Promise<any> {
    try {
      const data = req.body
      if (!data.investmentId) {
        return res.status(400).send({
          success: false,
          message: 'Invalid Invetsment ID',
          code: 400
        })
      }
      const singleInvestments = await Investments.findOne({ where: { id: data.investmentId } })
      if (singleInvestments === null) {
        return res.status(400).send({
          success: false,
          message: 'Investment not found.',
          code: 400
        })
      }
      // Check if investment exists and is in pending state
      if (singleInvestments?.dataValues.Status === 'Pending') {
        return res.status(400).send({
          success: false,
          message: "This investment isn't available for Approval.",
          code: 400
        })
      }
      const dSystem = await Systems.findOne({ where: { id: 1 } })
      let UnitPeriod = 4
      let Duration = 1
      let MontlyDuraion = 12
      if (singleInvestments?.dataValues.Duration) {
        Duration = parseInt(singleInvestments?.dataValues.Duration) * Duration
        MontlyDuraion = Duration * 12
      }
      const amount = parseFloat(singleInvestments?.dataValues.Amount)
      const investmentID = singleInvestments?.dataValues.id
      const investorId = singleInvestments?.dataValues.investorId
      const percentage = parseFloat(dSystem?.dataValues.roi)
      UnitPeriod = parseInt(dSystem?.dataValues.UnitPeriod)
      for (let i = 1; i <= (MontlyDuraion / UnitPeriod); i++) {
        const currentDate = new Date()
        const currentMonth = currentDate.getMonth()
        const returnAmount = (percentage / 100) * amount
        currentDate.setMonth(currentMonth + (i * UnitPeriod))
        const returnDate = moment(currentDate).format('YYYY-MM-DD HH:mm:ss')
        const returnDateMonth = moment(currentDate).format('MMMM Do YYYY')
        const SaveROI = { investorId, investmentId: investmentID, percentage, returnAmount, returnDate, returnDateMonth }
        await Rois.create({ ...SaveROI })
      }

      const dinvestments = await singleInvestments.update({ Status: 'Active' })
      // find transasction
      const transaction = await Transactions.findOne({ where: { investmentId: investmentID } })
      if (transaction) {
        await transaction.update({ status: 'Success' })
      }
      const syst = await Systems.findOne({ where: { id: 1 } })
      const totalInvAmt = parseFloat(syst?.dataValues.totalActiveAmount) + amount
      if (syst) {
        await syst.update({ totalActiveAmount: totalInvAmt })
      }
      return res.status(201).json({ success: true, data: dinvestments })
    } catch (error: any) {
      return res.status(400).send({
        success: false,
        message: error.message,
        code: 400
      })
    }
  };

  /**
 * Create Investments
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async createInvestments (req: any, res: any, next: any): Promise<any> {
    try {
      const data = req.body
      const validate = await InvestmentsValidation.validateCreateInvestments(data)
      if (validate.result === 'error') {
        const result: { code: number, message: string } = {
          code: 400,
          message: validate.message
        }
        return res.status(result.code).send(result)
      }

      const dInvestments = await Investments.create({ ...data })

      return res.status(201).json({ success: true, data: dInvestments })
    } catch (error: any) {
      return res.status(400).send({
        success: false,
        message: error.message,
        code: 400
      })
    }
  };

  /**
 * Single Investments
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async getSingleInvestments (req: any, res: any, next: any): Promise<any> {
    try {
      const { id } = req.params

      const singleInvestments = await Investments.findOne({ where: { id } })

      if (!singleInvestments) {
        return res.status(400).json({ success: false, data: `No Investments with the id ${req.params.id}` })
      }

      const singleTransactions = await Transactions.findOne({ where: { investmentId: id } })
      const invROI = await Rois.findAll({ where: { investmentId: id } })
      singleInvestments.dataValues.Transactions = singleTransactions
      singleInvestments.dataValues.ROIs = invROI

      return res.status(200).json({ success: true, data: singleInvestments })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  /**
 * Get All Investments
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async getallInvestments (req: any, res: any, next: any): Promise<any> {
    const PAGE_SIZE = 10

    try {
      let page: number = 1

      if (req.query.page && typeof req.query.page === 'string') {
        page = parseInt(req.query.page, 10)
      }

      const allInvestments = await Investments.findAndCountAll({
        limit: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE
      })

      const totalPages = Math.ceil(allInvestments.count / PAGE_SIZE)

      return res.status(200).json({
        success: true,
        data: allInvestments.rows,
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
 * Update Investments
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async updateInvestments (req: any, res: any, next: any): Promise<any> {
    try {
      const investmentsId = req.params.id
      const updatedInfo = req.body

      const investments = await Investments.findByPk(investmentsId)

      if (!investments) {
        return res.status(404).json({ success: false, message: 'Investments not found' })
      }

      const dinvestments = await investments.update(updatedInfo)

      return res.status(200).json({ success: true, data: dinvestments, message: 'Investments information updated' })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  /**
 * Delete Investments
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async deleteInvestments (req: any, res: any, next: any): Promise<any> {
    try {
      const investmentsId = req.params.id

      const investments = await Investments.findByPk(investmentsId)

      if (!investments) {
        return res
          .status(404)
          .json({ success: false, message: 'Investments not found' })
      }

      await investments.destroy()

      return res.status(200).json({ success: true, message: 'Investments deleted' })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }
}

export default InvestmentsController
