/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
import { getUIDfromDate, EncryptPassword, GenerateToken, CheckPassword, SendMail } from '../../libs/utils/app.utility'
import Referral from '../../models/referral.model'
import Auth from '../../models/auths.model'
import ReferralValidation from './referral.validation'

class ReferralController {
  static async login (req: any, res: any, next: any): Promise<any> {
    try {
      let token
      const { email, password } = req.body

      console.log('req.body', req.body)

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: 'Email and password is required' })
      }

      const account: any = await Auth.findOne({ where: { Email: email } })

      if (!account) {
        const result: any = {
          message: 'Referral Account  Not Found!',
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

      if (parseInt(account.dataValues.Verified) === 0) {
        const result: any = {
          message: 'Account Not Verified! Kindly check your email for verification link',
          code: 400
        }
        return res.status(result.code).json(result)
      }

      if (account !== null) {
        token = GenerateToken(account)
      }

      return res.status(200).json({ success: true, data: account, token })
    } catch (error: any) {
      const result: any = {
        message: 'Error login in: ' + error.message,
        code: 400
      }
      return res.status(result.code).json(result)
    }
  }

  static async checkReferralacccount (req: any, res: any, next: any): Promise<any> {
    try {
      const data = req.body
      const validate = await ReferralValidation.validateCheckReferral(data)
      if (validate.result === 'error') {
        const result: { code: number, message: string } = {
          code: 400,
          message: validate.message
        }
        return res.status(result.code).send(result)
      }

      const checkExist = await Auth.findOne({ where: { ...data } })
      if (checkExist !== null) {
        return res.status(201).send({
          message: 'Already Exist',
          code: 201,
          data: checkExist
        })
      } else {
        return res.status(202).send({
          message: 'New Account',
          code: 202,
          data: data.Email
        })
      }
    } catch (error: any) {
      return res.status(400).send({
        message: error.message,
        code: 400
      })
    }
  };

  static async verifyaccount (req: any, res: any): Promise<any> {
    try {
      const { email, token } = req.params

      const account = await Auth.findOne({ where: { Email: email, UserID: token } })

      if (account === null) {
        return res.status(400).json({ success: false, data: `No Investor with the id ${req.params.id}` })
      }

      await account.update({ Verified: '1' })
      // return response as html text
      res.setHeader('Content-Type', 'text/html')
      res.write(`
          <h3>Your account has been verified successfully</h3><br/>
          Please click on this <a href="https://earn.cadencepub.com/login/">link to login.</a>
        `)
      return res.end()
    } catch (error: any) {
      const err = { code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  static async createReferral (req: any, res: any, next: any): Promise<any> {
    try {
      const data = req.body
      const validate = await ReferralValidation.validateCreateReferral(data)
      if (validate.result === 'error') {
        const result: { code: number, message: string } = {
          code: 400,
          message: validate.message
        }
        return res.status(result.code).send(result)
      }

      const checkExist = await Referral.findOne({ where: { Email: data.Email } })
      if (checkExist !== null) {
        return res.status(400).send({
          message: 'Record Already Exist',
          code: 400
        })
      }

      const DID = getUIDfromDate('rf')
      data.UserID = DID
      const dpaswprd = data.Password ?? DID
      const account: any = {}
      account.UserID = data.UserID
      account.FullName = data.FullName
      account.Email = data.Email
      account.Role = 'Referral'
      account.UserType = 'User'
      account.PasswordHash = await EncryptPassword(dpaswprd)
      account.RefreshToken = account.PasswordHash
      account.Token = dpaswprd
      account.Verified = '0'

      const daccount = await Auth.create({ ...account })

      const dReferral = await Referral.create({ ...data })
      dReferral.dataValues.account = daccount

      // send mail
      const templateParams = {
        to_name: data.FullName,
        reply_to: 'contact@cadencepub.com',
        subject: 'Welcome to Cadence Referral System!',
        message: `
We are thrilled to have you on board in our affiliate marketing platform, where earning is as simple as sharing!
Unlock exciting rewards by referring people to our services using your link and get fantastic opportunities to earn.
<br> <br> Please proceed to your account verification  with the link below : <br>
 Link : <a href="https://cadencepub.com/${process.env.NODE_ENV}/api/v1/referral/verify/${data.Email}/${DID}?">https://cadencepub.com/${process.env.NODE_ENV}/api/v1/referral/verify/${data.Email}/${DID}?</a><br>

Thank you for choosing Cadence.
<br><br>
Best regards,<br>
Cadence Marketing Team<br>
<br>
`,
        to_email: data.Email
      }
      await SendMail(templateParams)

      res.status(201).json({ success: true, code: 201, data: dReferral })
    } catch (error: any) {
      return res.status(400).send({
        message: error.message,
        code: 400
      })
    }
  };

  static async getSingleReferral (req: any, res: any, next: any): Promise<any> {
    try {
      const { id } = req.params

      const singleReferral = await Referral.findOne({ where: { id } })

      if (!singleReferral) {
        res.status(400).json({ success: false, data: `No Referral with the id ${req.params.id}` })
      }

      res.status(200).json({ success: true, data: singleReferral })
    } catch (error: any) {
      const err = { code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  static async getallReferral (req: any, res: any, next: any): Promise<any> {
    const PAGE_SIZE = 10

    try {
      let page: number = 1

      if (req.query.page && typeof req.query.page === 'string') {
        page = parseInt(req.query.page, 10)
      }

      const allReferrals = await Referral.findAndCountAll({
        limit: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE
      })

      const totalPages = Math.ceil(allReferrals.count / PAGE_SIZE)

      res.status(200).json({
        success: true,
        data: allReferrals.rows,
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

  static async updateReferral (req: any, res: any, next: any): Promise<any> {
    try {
      const agentId = req.params.id
      const updatedInfo = req.body

      const agent = await Referral.findByPk(agentId)

      if (!agent) {
        return res.status(404).json({ success: false, message: 'Referral not found' })
      }

      await agent.update(updatedInfo)

      res.status(200).json({ success: true, data: agent, message: 'Referral information updated' })
    } catch (error: any) {
      const err = { code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  static async deleteReferral (req: any, res: any, next: any): Promise<any> {
    try {
      const referralId = req.params.id

      const referral = await Referral.findByPk(referralId)

      if (!referral) {
        return res
          .status(404)
          .json({ success: false, message: 'Referral not found' })
      }
      const dauth = await Auth.findOne({ where: { UserID: referral.dataValues.UserID } })
      if (dauth) {
        await dauth.destroy()
      }
      await referral.destroy()

      res.status(200).json({ success: true, message: 'Referral deleted' })
    } catch (error: any) {
      const err = { code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }
}

export default ReferralController
