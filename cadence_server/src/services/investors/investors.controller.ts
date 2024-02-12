/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
import { getUIDfromDate, EncryptPassword, GenerateToken, CheckPassword, SendMail } from '../../libs/utils/app.utility'
import Investors from '../../models/investors.model'
import Auth from '../../models/auths.model'
import InvestorsValidation from './investors.validation'
import Investments from '../../models/investments.model'

import Transactions from '../../models/transactions.model'
import Systems from '../../models/systems.model'
import sequelize from '../../config/db'
import { QueryTypes } from 'sequelize'

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
      data.roi = await sequelize.query(`SELECT  DATE_FORMAT(returnDate, '%b, %Y') AS returnMonth, SUM(CAST(returnAmount AS DECIMAL(10,2))) AS totalReturnAmount FROM  rois where investorId="${user?.dataValues.UserID}" GROUP BY  returnMonth order by id`, { type: QueryTypes.SELECT })
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

      dInvestors.dataValues.account = daccount
      // send mail
      const templateParams = {
        to_name: data.FullName,
        reply_to: 'contact@cadencepub.com',
        subject: 'Welcome to Cadence Investment Platform!',
        message: `
Thank you for expressing interest in investing with Cadence. We are thrilled to have you on board as a potential investor in our exciting venture.<br>

Your investment journey with Cadence starts now! To complete your investment and unlock exclusive benefits as a Cadence investor,
<br> please proceed to your dashboard with the following details : <br><br>
 Link : <a href="https://cadencepub.com/signin">https://cadencepub.com/signin</a><br>
 Email: ${data.Email}<br>
 Password: ${data.UserID} <br><br>

<b>Here's what you can expect from your Cadence investment:</b><br>
  <span style="margin-left:20px"><span>  🔹Access to detailed investment information and updates.<br>

  <span style="margin-left:20px"><span>   🔹Regular updates on Cadence's progress and performance.<br>

  <span style="margin-left:20px"><span>   🔹Opportunities to participate in exclusive investor events and activities.<br>

  <span style="margin-left:20px"><span>   🔹Potential for attractive returns on your investment.<br><br>

Thank you for choosing to invest with Cadence. <br>We look forward to a successful partnership and sharing our journey to success with you.<br>
<br>
Best regards,<br><br>

Ola Daniels<br>
Chief Investment Officer<br>
`,
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

  static async createInvestors2 (req: any, res: any): Promise<any> {
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
        subject: 'Welcome to Cadence Investment Platform!',
        message: `
Thank you for expressing interest in investing with Cadence. We are thrilled to have you on board as a potential investor in our exciting venture.<br>

Your investment journey with Cadence starts now! To complete your investment and unlock exclusive benefits as a Cadence investor,
<br> please proceed to your dashboard with the following details : <br><br>
 Link : <a href="https://cadencepub.com/signin">https://cadencepub.com/signin</a><br>
 Email: ${data.Email}<br>
 Password: ${data.UserID} <br><br>

<b>Here's what you can expect from your Cadence investment:</b><br>
  <span style="margin-left:20px"><span>  🔹Access to detailed investment information and updates.<br>

  <span style="margin-left:20px"><span>   🔹Regular updates on Cadence's progress and performance.<br>

  <span style="margin-left:20px"><span>   🔹Opportunities to participate in exclusive investor events and activities.<br>

  <span style="margin-left:20px"><span>   🔹Potential for attractive returns on your investment.<br><br>

Thank you for choosing to invest with Cadence. <br>We look forward to a successful partnership and sharing our journey to success with you.<br>
<br>
Best regards,<br><br>

Ola Daniels<br>
Chief Investment Officer<br>
`,
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
