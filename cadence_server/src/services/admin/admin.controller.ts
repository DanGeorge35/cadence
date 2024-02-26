/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
import fs from 'fs'
import { getUIDfromDate, EncryptPassword, GenerateToken, CheckPassword } from '../../libs/utils/app.utility'
import Auth from '../../models/auths.model'
import Admin from '../../models/admin.model'
import AdminValidation from './admin.validation'
import Investments from '../../models/investments.model'
import Roi from '../../models/rois.model'
import Transactions from '../../models/transactions.model'
import Systems from '../../models/systems.model'
import sequelize from '../../config/db'
import { QueryTypes } from 'sequelize'

class AdminController {
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

      const account: any = await Auth.findOne({ where: { Email: email, UserType: 'Admin' } })
      const user = await Admin.findOne({ where: { Email: email } })
      if (!account) {
        const result: any = {
          message: 'Admin Account  Not Found!',
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

      const data: any = { user, account }
      if (user !== null) {
        token = GenerateToken(data)
      }
      data.investments = await Investments.findAndCountAll()
      data.roi = await Roi.findAndCountAll()
      data.invChart = await sequelize.query("SELECT DATE_FORMAT(createdAt, '%b, %Y') AS MonthPeriod,SUM(CAST(Amount AS DECIMAL(10,2))) AS TotalAmount FROM investments where Status = 'Active' GROUP BY MonthPeriod order by id", { type: QueryTypes.SELECT })
      data.transactions = await Transactions.findAndCountAll()
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

  /**
 * Create Admin
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async createAdmin (req: any, res: any, next: any): Promise<any> {
    try {
      const data = req.body
      const validate = await AdminValidation.validateCreateAdmin(data)
      if (validate.result === 'error') {
        const result: { code: number, message: string } = {
          code: 400,
          message: validate.message
        }
        return res.status(result.code).send(result)
      }
      const dir = './public/admin'
      if (!fs.existsSync(`.${dir}`)) {
        fs.mkdirSync(`.${dir}`)
      }
      const checkAdmData = { ...data }
      delete checkAdmData.Role
      delete checkAdmData.password
      const checkExist = await Admin.findOne({ where: { ...checkAdmData } })
      if (checkExist !== null) {
        return res.status(400).send({
          success: false,
          message: 'This Admin Record Already Exist',
          code: 400
        })
      }

      const DID = getUIDfromDate('ADM')
      data.UserID = DID

      const dpaswprd = data.password ?? DID
      const account: any = {}
      account.UserID = data.UserID
      account.FullName = data.FullName
      account.Email = data.Email
      account.Role = data.Role
      account.UserType = 'Admin'
      account.PasswordHash = await EncryptPassword(dpaswprd)
      account.RefreshToken = account.PasswordHash
      account.Token = dpaswprd
      account.Verified = '1'

      const daccount = await Auth.create({ ...account })
      const dAdmin = await Admin.create({ ...data })
      dAdmin.dataValues.account = daccount

      return res.status(201).json({ success: true, data: dAdmin })
    } catch (error: any) {
      return res.status(400).send({
        success: false,
        message: error.message,
        code: 400
      })
    }
  };

  /**
 * Single Admin
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async getSingleAdmin (req: any, res: any, next: any): Promise<any> {
    try {
      const { id } = req.params

      const singleAdmin = await Admin.findOne({ where: { id } })

      if (!singleAdmin) {
        return res.status(400).json({ success: false, data: `No Admin with the id ${req.params.id}` })
      }

      return res.status(200).json({ success: true, data: singleAdmin })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  /**
 * Get All Admin
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async getallAdmin (req: any, res: any, next: any): Promise<any> {
    const PAGE_SIZE = 10

    try {
      let page: number = 1

      if (req.query.page && typeof req.query.page === 'string') {
        page = parseInt(req.query.page, 10)
      }

      const allAdmin = await Admin.findAndCountAll({
        limit: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE
      })

      const totalPages = Math.ceil(allAdmin.count / PAGE_SIZE)

      return res.status(200).json({
        success: true,
        data: allAdmin.rows,
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
 * Update Admin
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async updateAdmin (req: any, res: any, next: any): Promise<any> {
    try {
      const adminId = req.params.id
      const updatedInfo = req.body

      const admin = await Admin.findByPk(adminId)

      if (!admin) {
        return res.status(404).json({ success: false, message: 'Admin not found' })
      }

      const dadmin = await admin.update(updatedInfo)

      return res.status(200).json({ success: true, data: dadmin, message: 'Admin information updated' })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  /**
 * Delete Admin
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async deleteAdmin (req: any, res: any, next: any): Promise<any> {
    try {
      const adminId = req.params.id

      const admin = await Admin.findByPk(adminId)

      if (!admin) {
        return res
          .status(404)
          .json({ success: false, message: 'Admin not found' })
      }

      await admin.destroy()

      return res.status(200).json({ success: true, message: 'Admin deleted' })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }
}

export default AdminController
