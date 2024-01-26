/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
import { getUIDfromDate, EncryptPassword, GenerateToken, CheckPassword, SendMail } from '../../libs/utils/app.utility'
import Investors from '../../models/investors.model'
import Auth from '../../models/auths.model'
import InvestorsValidation from './investors.validation'
import Investments from '../../models/investments.model'
import Roi from '../../models/rois.model'
import Transactions from '../../models/transactions.model'
import Systems from '../../models/systems.model'

class InvestorsController {
  static async login (req: any, res: any): Promise<any> {
    try {
      let token
      const { email, password } = req.body

      console.log('req.body', req.body)

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: 'Email and password is required' })
      }

      const account: any = await Auth.findOne({ where: { Email: email, UserType: 'Investor' } })
      const user = await Investors.findOne({ where: { Email: email } })
      if (!account) {
        const result: any = {
          message: 'Account  Not Found!',
          code: 400
        }
        return res.status(result.code).json(result)
      }
      const validPass = await CheckPassword(password, account.PasswordHash)
      if (!validPass) {
        const result: any = {
          message: 'Incorret Password!',
          code: 400
        }
        return res.status(result.code).json(result)
      }

      if (user !== null) {
        token = GenerateToken(user)
      }

      const data: any = {}
      data.user = user
      data.investments = await Investments.findAndCountAll({ where: { investorId: user?.dataValues.UserID } })
      data.roi = await Roi.findAndCountAll({ where: { investorId: user?.dataValues.UserID } })
      data.transactions = await Transactions.findAndCountAll({ where: { investorId: user?.dataValues.UserID } })
      data.System = await Systems.findOne({ where: { id: 1 } })

      res.status(200).json({ success: true, data, token })
    } catch (error: any) {
      const result: any = {
        message: 'Error login in: ' + error.message,
        code: 400
      }
      res.status(result.code).json(result)
    }
  }

  static async createInvestors (req: any, res: any): Promise<any> {
    try {
      const data = req.body
      const validate = await InvestorsValidation.validateCreateInvestors(data)
      if (validate.result === 'error') {
        const result: { code: number, message: string } = {
          code: 400,
          message: validate.message
        }
        return res.status(result.code).send(result)
      }

      const checkExist = await Investors.findOne({ where: { Email: data.Email } })
      if (checkExist !== null) {
        return res.status(400).send({
          message: 'This Investor  Already Exist',
          code: 400
        })
      }

      const DID = getUIDfromDate('INV')
      data.UserID = DID
      data.UserType = 'Investor'
      const dpaswprd = data.Password ?? DID

      const account: any = {}
      account.UserID = data.UserID
      account.FullName = data.FullName
      account.Email = data.Email
      account.Role = data.UserType
      account.UserType = 'Investor'
      account.PasswordHash = await EncryptPassword(dpaswprd)
      account.RefreshToken = account.PasswordHash
      account.Token = dpaswprd
      account.Verified = '1'

      const daccount = await Auth.create({ ...account })

      const dInvestors = await Investors.create({ ...data })

      data.investorId = data.UserID
      await Investments.create({ ...data })

      dInvestors.dataValues.account = daccount
      // send mail
      const templateParams = {
        to_name: data.FullName,
        reply_to: 'contact@cadencepub.com',
        subject: 'Confirmation of Your Investment Interest with Cadence',
        message: `
Thank you for expressing your interest in investing with Cadence. We are delighted that you are considering us as your investment partner.
Your trust means a lot to us, and we want to assure you that your investment is safe with Cadence.<br><br>

To complete the investment process, please proceed with the following steps:<br>

Step 1: Transfer your investment amount to the following Cadence bank account:<br><br>

Bank Name: Moniepoint<br>
Account Name: Cadence Cafe<br>
Account Number: 5356651057<br>
<br>
Step 2: After making the transfer, please reply to this email with the following payment details:<br><br>

Date of payment<br>
Amount transferred<br>
Transaction reference or receipt number<br>
Your full name<br>
<br>
Step 3: Our team will process your investment and issue the necessary documents to validate your investment with Cadence. You will receive a confirmation certificate once this process is complete.
<br><br>
If you have any questions or need further assistance, please don't hesitate to reach out to us at 09018009811
<br>
We look forward to having you as part of our journey at Cadence and promise to do our best to make your investment a rewarding and fulfilling experience.
<br>
Thank you once again for considering Cadence as your investment partner. Together, we'll create something extraordinary.
<br><br><br>
Warm regards,<br><br>

Ola<br>
Team Lead/CEO, Cadence<br>`,
        to_email: data.Email
      }
      res.status(201).json({ success: true, data: dInvestors })
      await SendMail(templateParams)
    } catch (error: any) {
      return res.status(400).send({
        message: error.message,
        code: 400
      })
    }
  };

  static async getSingleInvestors (req: any, res: any): Promise<any> {
    try {
      const { id } = req.params

      const singleInvestors = await Investors.findOne({ where: { id } })

      if (!singleInvestors) {
        res.status(400).json({ success: false, data: `No Investor with the id ${req.params.id}` })
      }

      res.status(200).json({ success: true, data: singleInvestors })
    } catch (error: any) {
      const err = { code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  static async getallInvestors (req: any, res: any): Promise<any> {
    const PAGE_SIZE = 10

    try {
      let page: number = 1

      if (req.query.page && typeof req.query.page === 'string') {
        page = parseInt(req.query.page, 10)
      }

      const allInvestorss = await Investors.findAndCountAll({
        limit: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE
      })

      const totalPages = Math.ceil(allInvestorss.count / PAGE_SIZE)

      res.status(200).json({
        success: true,
        data: allInvestorss.rows,
        pagination: {
          currentPage: page,
          totalPages,
          pageSize: PAGE_SIZE
        }
      })
    } catch (error: any) {
      const err = { code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  /**
 * Update investor information.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async updateInvestors (req: any, res: any): Promise<any> {
    try {
      const agentId = req.params.id
      const updatedInfo = req.body

      const agent = await Investors.findByPk(agentId)

      if (!agent) {
        return res.status(404).json({ success: false, message: 'Investor not found' })
      }

      await agent.update(updatedInfo)

      res.status(200).json({ success: true, data: agent, message: 'Investor information updated' })
    } catch (error: any) {
      const err = { code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  static async deleteInvestors (req: any, res: any): Promise<any> {
    try {
      const investorsId = req.params.id

      const investors = await Investors.findByPk(investorsId)

      if (!investors) {
        return res
          .status(404)
          .json({ success: false, message: 'Investors not found' })
      }
      const dauth = await Auth.findOne({ where: { UserID: investors.dataValues.UserID } })
      if (dauth) {
        await dauth.destroy()
      }

      await investors.destroy()

      res.status(200).json({ success: true, message: 'Investor deleted' })
    } catch (error: any) {
      const err = { code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }
}

export default InvestorsController
