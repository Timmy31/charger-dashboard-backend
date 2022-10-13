import { CreateChargerDto } from '@dtos/chargers.dto';
import { HttpException } from '@exceptions/HttpException';
import { Charger } from '@interfaces/chargers.interface';
import chargerModel from '@models/chargers.model';
import { isEmpty } from '@utils/util';

class ChargerService {
  public chargers = chargerModel;

  public async findAllCharger(): Promise<Charger[]> {
    const chargers: Charger[] = await this.chargers.find();
    return chargers;
  }

  public async findChargerById(chargerId: string): Promise<Charger> {
    if (isEmpty(chargerId)) throw new HttpException(400, 'chargerId is empty');

    const findCharger: Charger = await this.chargers.findOne({ _id: chargerId });
    if (!findCharger) throw new HttpException(409, "Charger doesn't exist");

    return findCharger;
  }

  public async createCharger(chargerData: CreateChargerDto): Promise<Charger> {
    if (isEmpty(chargerData)) throw new HttpException(400, 'chargerData is empty');

    const findCharger: Charger = await this.chargers.findOne({ serialNumber: chargerData.serialNumber });
    if (findCharger) throw new HttpException(409, `This Serial Number ${chargerData.serialNumber} already exists`);

    const createChargerData: Charger = await this.chargers.create({ ...chargerData });

    return createChargerData;
  }

  public async updateCharger(chargerId: string, chargerData: CreateChargerDto): Promise<Charger> {
    if (isEmpty(chargerData)) throw new HttpException(400, 'chargerData is empty');

    if (chargerData.serialNumber) {
      const findCharger: Charger = await this.chargers.findOne({ email: chargerData.serialNumber });
      if (findCharger && findCharger._id != chargerId) throw new HttpException(409, `This serial no ${chargerData.serialNumber} already exists`);
    }

    const updateChargerById: Charger = await this.chargers.findByIdAndUpdate(chargerId, { chargerData });
    if (!updateChargerById) throw new HttpException(409, "Charger doesn't exist");

    return updateChargerById;
  }

  public async deleteCharger(chargerId: string): Promise<Charger> {
    const deleteChargerById: Charger = await this.chargers.findByIdAndDelete(chargerId);
    if (!deleteChargerById) throw new HttpException(409, "Charger doesn't exist");

    return deleteChargerById;
  }
}

export default ChargerService;
