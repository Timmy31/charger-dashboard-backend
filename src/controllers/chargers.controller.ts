import { NextFunction, Request, Response } from 'express';
import { CreateChargerDto } from '@dtos/chargers.dto';
import { Charger } from '@interfaces/chargers.interface';
import chargerService from '@services/chargers.service';

class ChargersController {
  public chargerService = new chargerService();

  public getChargers = async (req: Request, res: Response, next: NextFunction) => {
    console.log('getchargers')
    try {
      const findAllChargersData: Charger[] = await this.chargerService.findAllCharger();

      res.status(200).json({ data: findAllChargersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getChargerById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const findOneUserData: Charger = await this.chargerService.findChargerById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCharger = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateChargerDto = req.body;
      const createChargerData: Charger = await this.chargerService.createCharger(userData);

      res.status(201).json({ data: createChargerData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCharger = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const userData: CreateChargerDto = req.body;
      const updateChargerData: Charger = await this.chargerService.updateCharger(userId, userData);

      res.status(200).json({ data: updateChargerData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCharger = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const deleteChargerData: Charger = await this.chargerService.deleteCharger(userId);

      res.status(200).json({ data: deleteChargerData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ChargersController;
