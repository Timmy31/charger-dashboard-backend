import { Router } from 'express';
import ChargersController from '@controllers/chargers.controller';
import { CreateChargerDto } from '@dtos/chargers.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class ChargersRoute implements Routes {
  public path = '/chargers';
  public router = Router();
  public chargersController = new ChargersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.chargersController.getChargers);
    this.router.get(`${this.path}/:id`, this.chargersController.getChargerById);
    this.router.post(`${this.path}`, validationMiddleware(CreateChargerDto, 'body'), this.chargersController.createCharger);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateChargerDto, 'body', true), this.chargersController.updateCharger);
    this.router.delete(`${this.path}/:id`, this.chargersController.deleteCharger);
  }
}

export default ChargersRoute;
