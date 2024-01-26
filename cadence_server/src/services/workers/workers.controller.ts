/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
import { getUIDfromDate, EncryptPassword, GenerateToken, CheckPassword } from '../../libs/utils/app.utility'
import Workers from '../../models/workers.model'
import Auth from '../../models/auths.model'
import WorkersValidation from './workers.validation'

class WorkersController {
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

      const account: any = await Auth.findOne({ where: { Email: email, UserType: 'Worker' } })
      const user = await Workers.findOne({ where: { Email: email } })
      if (!account) {
        const result: any = {
          message: 'Workers Account  Not Found!',
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

      res.status(200).json({ success: true, data: user, token })
    } catch (error: any) {
      const result: any = {
        message: 'Error login in: ' + error.message,
        code: 400
      }
      res.status(result.code).json(result)
    }
  }

  static async createWorkers (req: any, res: any, next: any): Promise<any> {
    try {
      const data = req.body
      const validate = await WorkersValidation.validateCreateWorkers(data)
      if (validate.result === 'error') {
        const result: { code: number, message: string } = {
          code: 400,
          message: validate.message
        }
        return res.status(result.code).send(result)
      }

      const checkExist = await Workers.findOne({ where: { ...data } })
      if (checkExist !== null) {
        return res.status(400).send({
          message: 'This Workers Record Already Exist',
          code: 400
        })
      }

      const DID = getUIDfromDate('WRK')
      data.UserID = DID
      const dpaswprd = data.Password ?? DID
      const account: any = {}
      account.UserID = data.UserID
      account.FullName = data.FullName
      account.Email = data.Email
      account.Role = data.Role
      account.UserType = 'Worker'
      account.PasswordHash = await EncryptPassword(dpaswprd)
      account.RefreshToken = account.PasswordHash
      account.Token = dpaswprd
      account.Verified = '1'

      const daccount = await Auth.create({ ...account })

      const dWorkers = await Workers.create({ ...data })
      dWorkers.dataValues.account = daccount
      res.status(201).json({ success: true, data: dWorkers })
    } catch (error: any) {
      return res.status(400).send({
        message: error.message,
        code: 400
      })
    }
  };

  static async getSingleWorkers (req: any, res: any, next: any): Promise<any> {
    try {
      const { id } = req.params

      const singleWorkers = await Workers.findOne({ where: { id } })

      if (!singleWorkers) {
        res.status(400).json({ success: false, data: `No Workers with the id ${req.params.id}` })
      }

      res.status(200).json({ success: true, data: singleWorkers })
    } catch (error: any) {
      const err = { code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  static async getallWorkers (req: any, res: any, next: any): Promise<any> {
    const PAGE_SIZE = 10

    try {
      let page: number = 1

      if (req.query.page && typeof req.query.page === 'string') {
        page = parseInt(req.query.page, 10)
      }

      const allWorkerss = await Workers.findAndCountAll({
        limit: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE
      })

      const totalPages = Math.ceil(allWorkerss.count / PAGE_SIZE)

      res.status(200).json({
        success: true,
        data: allWorkerss.rows,
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

  static async updateWorkers (req: any, res: any, next: any): Promise<any> {
    try {
      const agentId = req.params.id
      const updatedInfo = req.body

      const agent = await Workers.findByPk(agentId)

      if (!agent) {
        return res.status(404).json({ success: false, message: 'Workers not found' })
      }

      await agent.update(updatedInfo)

      res.status(200).json({ success: true, data: agent, message: 'Workers information updated' })
    } catch (error: any) {
      const err = { code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  static async deleteWorkers (req: any, res: any, next: any): Promise<any> {
    try {
      const workersId = req.params.id

      const workers = await Workers.findByPk(workersId)

      if (!workers) {
        return res
          .status(404)
          .json({ success: false, message: 'Workers not found' })
      }
      const dauth = await Auth.findOne({ where: { UserID: workers.dataValues.UserID } })
      if (dauth) {
        await dauth.destroy()
      }
      await workers.destroy()

      res.status(200).json({ success: true, message: 'Workers deleted' })
    } catch (error: any) {
      const err = { code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }
}

export default WorkersController
