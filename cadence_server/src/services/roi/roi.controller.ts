/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
import Roi from '../../models/rois.model'
import RoiValidation from './roi.validation'

class RoiController {
/**
 * Create Roi
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async createRoi (req: any, res: any, next: any): Promise<any> {
    try {
      const data = req.body
      const validate = await RoiValidation.validateCreateRoi(data)
      if (validate.result === 'error') {
        const result: { code: number, message: string } = {
          code: 400,
          message: validate.message
        }
        return res.status(result.code).send(result)
      }

      const dRoi = await Roi.create({ ...data })

      return res.status(201).json({ success: true, data: dRoi })
    } catch (error: any) {
      return res.status(400).send({
        success: false,
        message: error.message,
        code: 400
      })
    }
  };

  /**
 * Single Roi
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async getSingleRoi (req: any, res: any, next: any): Promise<any> {
    try {
      const { id } = req.params

      const singleRoi = await Roi.findOne({ where: { id } })

      if (!singleRoi) {
        return res.status(400).json({ success: false, data: `No Roi with the id ${req.params.id}` })
      }

      return res.status(200).json({ success: true, data: singleRoi })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  /**
 * Get All Roi
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async getallRoi (req: any, res: any, next: any): Promise<any> {
    const PAGE_SIZE = 10

    try {
      let page: number = 1

      if (req.query.page && typeof req.query.page === 'string') {
        page = parseInt(req.query.page, 10)
      }

      const allRoi = await Roi.findAndCountAll({
        limit: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE
      })

      const totalPages = Math.ceil(allRoi.count / PAGE_SIZE)

      return res.status(200).json({
        success: true,
        data: allRoi.rows,
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
 * Update Roi
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async updateRoi (req: any, res: any, next: any): Promise<any> {
    try {
      const roiId = req.params.id
      const updatedInfo = req.body

      const roi = await Roi.findByPk(roiId)

      if (!roi) {
        return res.status(404).json({ success: false, message: 'Roi not found' })
      }

      const droi = await roi.update(updatedInfo)

      return res.status(200).json({ success: true, data: droi, message: 'Roi information updated' })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }

  /**
 * Delete Roi
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<any>} A Promise that resolves to the response.
 */
  static async deleteRoi (req: any, res: any, next: any): Promise<any> {
    try {
      const roiId = req.params.id

      const roi = await Roi.findByPk(roiId)

      if (!roi) {
        return res
          .status(404)
          .json({ success: false, message: 'Roi not found' })
      }

      await roi.destroy()

      return res.status(200).json({ success: true, message: 'Roi deleted' })
    } catch (error: any) {
      const err = { success: false, code: 400, message: `SYSTEM ERROR : ${error.message}` }
      console.error(error)
      return res.status(400).send(err)
    }
  }
}

export default RoiController
