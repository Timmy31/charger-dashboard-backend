import { model, Schema, Document } from 'mongoose';
import { Charger } from '@interfaces/chargers.interface';

const chargerSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
  },
  chargerType: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const chargerModel = model<Charger & Document>('Charger', chargerSchema);

export default chargerModel;
