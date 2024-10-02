import { Schema, model } from 'mongoose';

const settingsSchema = new Schema({
  tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true },
  restaurantDisplayLimit: { type: Number, default: 10 },
  colorCode: { type: String, default: '#FFFFFF' },
});

export default model('Settings', settingsSchema);
