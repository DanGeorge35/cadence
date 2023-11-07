import { Request, Response, NextFunction } from "express";
import Training from "../../models/traning/Traning.model";

class traningControler {
  static async createTraining(req: any, res: any, next: NextFunction) {
    try {

      const userId = req.user.id.id;
    
      const {
        traningDate,
        trainingCategory,
        trainingTopic,
        trainingWard,
        trainingLGA,
        trainingState,
      } = req.body;

      const trainingData = {
        agent_id: userId,
        category: trainingCategory,
        topic: trainingTopic,
        ward: trainingWard,
        lga: trainingLGA,
        state: trainingState,
        date: traningDate
      }

      const newTraining = await Training.create(trainingData);

      res.status(201).json({ success: true, data: newTraining });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getAllTrainings(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const PAGE_SIZE = 10;

    try {
      let page = req.query.page ? parseInt(req.query.page as string, 10) : 1; 

      const offset = (page - 1) * PAGE_SIZE;

      const { count, rows } = await Training.findAndCountAll({
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

  static async updateTraining(req: any, res: Response, next: NextFunction) {
    try {
      const trainingId = req.params.id;
      const userId = req.user.id.id;

      const {
        traningDate,
        trainingCategory,
        trainingTopic,
        trainingWard,
        trainingLGA,
        trainingState
      } = req.body
      
      const updatedInfo = {
        agent_id: userId,
        category: trainingCategory,
        topic: trainingTopic,
        ward: trainingWard,
        lga: trainingLGA,
        state: trainingState,
        date: traningDate
      };


      const training = await Training.findByPk(trainingId);

      if (!training) {
        return res
          .status(404)
          .json({ success: false, message: "Training not found" });
      }

      await training.update(updatedInfo);

      res.status(200).json({
        success: true,
        data: training,
        message: "Training information updated",
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteTraining(req: Request, res: Response, next: NextFunction) {
    try {
      const trainingId = req.params.id;

      const training = await Training.findByPk(trainingId);

      if (!training) {
        return res
          .status(404)
          .json({ success: false, message: "Training not found" });
      }

      await training.destroy();

      res.status(200).json({ success: true, message: "Training deleted" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default traningControler;
