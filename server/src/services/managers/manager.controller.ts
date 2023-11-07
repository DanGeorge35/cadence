import { NextFunction, Request, Response } from "express";
import Manager from "../../models/manager/Manager.model";

class managerController {
  static async createManagerOnboarding(req: any, res: any, next: any) {
    try {

      const { firstName, lastName } = req.body;

      const manager = await Manager.create({ firstName, lastName });

      res.status(200).json({ success: true, data: manager });

    } catch (error) {
      next(error);
    }
  };

  static async getSingleMangerOnboarding(req: Request, res: Response, next: NextFunction){
    try {

        const { id } = req.body;

        const singleManger = await Manager.findOne({ where: { id } });

        if(!singleManger){
            res.status(400).json({ success: false, data: `No Manager with the id ${req.params.id}` });
        }

        res.status(200).json({ success: true, data: singleManger })

    } catch (error) {
        console.log(error);
        next(error);
    }
  }  
  

    static async getallMangerOnboarding(req: Request, res: Response, next: NextFunction) {
        const PAGE_SIZE = 10; 
        try {
            
            let page: number = 1;

            if (req.query.page && typeof req.query.page === 'string') {
                page = parseInt(req.query.page, 10);
            }

            const allManagers = await Manager.findAndCountAll({
                limit: PAGE_SIZE,
                offset: (page - 1) * PAGE_SIZE,
            });

            const totalPages = Math.ceil(allManagers.count / PAGE_SIZE);    

            res.status(200).json({
                success: true,
                data: allManagers.rows,
                pagination: {
                    currentPage: page,
                    totalPages: totalPages,
                    pageSize: PAGE_SIZE,
                }
            });

        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async updateManagerOnboarding(req: Request, res: Response, next: NextFunction) {
        try {
            const managerId = req.params.id; 
            const updatedInfo = req.body; 
    
            const manager = await Manager.findByPk(managerId);
    
            if (!manager) {
                return res.status(404).json({ success: false, message: 'Manager not found' });
            }
    
            await manager.update(updatedInfo);
    
            res.status(200).json({ success: true, data: manager, message: 'Manager information updated' });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }



}

export default managerController;