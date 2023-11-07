import { NextFunction, Request, Response } from "express";
import Farmers from "../../models/Farmers/Farmers.model";

class farmerController {
  static async createFarmer(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        firstName,
        middleName,
        lastName,
        dateOfBirth,
        farmersPhoto,
        residentialAddress,
        stateOfResidence,
        LGAOfResidence,
        ward,
        phoneNumber,
      } = req.body;

      const newFarmer = await Farmers.create({
        firstName,
        middleName,
        lastName,
        dateOfBirth,
        farmersPhoto,
        residentialAddress,
        stateOfResidence,
        LGAOfResidence,
        ward,
        phoneNumber,
      });

      res.status(201).json({ success: true, data: newFarmer });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getAllFarmers(req: Request, res: Response, next: NextFunction) {
    const PAGE_SIZE = 10;

    try {
      let page = req.query.page ? parseInt(req.query.page as string, 10) : 1;

      const offset = (page - 1) * PAGE_SIZE;

      const { count, rows } = await Farmers.findAndCountAll({
        limit: PAGE_SIZE,
        offset: offset,
      });

      const totalPages = Math.ceil(count / PAGE_SIZE); 

      res.status(200).json({
        success: true,
        currentPage: page,
        totalPages: totalPages,
        pageSize: PAGE_SIZE,
        totalRecords: count,
        data: rows,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getSingleFarmer(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.body;

      const singleFarmer = await Farmers.findOne({ where: { id } });

      if (!singleFarmer) {
        res.status(400).json({
          success: false,
          data: `No Manager with the id ${req.params.id}`,
        });
      }

      res.status(200).json({ success: true, data: singleFarmer });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async updateFarmer(req: Request, res: Response, next: NextFunction) {
    try {
      const farmerId = req.params.id;
      const updatedInfo = req.body;

      const farmer = await Farmers.findByPk(farmerId);

      if (!farmer) {
        return res
          .status(404)
          .json({ success: false, message: "Farmer not found" });
      }

      await farmer.update(updatedInfo);

      res.status(200).json({
        success: true,
        data: farmer,
        message: "Farmer information updated",
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteFarmer(req: Request, res: Response, next: NextFunction) {
    try {
      const farmerId = req.params.id;

      const farmer = await Farmers.findByPk(farmerId);

      if (!farmer) {
        return res
          .status(404)
          .json({ success: false, message: "Farmer not found" });
      }

      await farmer.destroy();

      res.status(200).json({ success: true, message: "Farmer deleted" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default farmerController;
