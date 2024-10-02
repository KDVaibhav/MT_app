import { Schema } from 'mongoose';

const restaurantSchema = new Schema({
  tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true },
  restaurantName: String,
  location: String,
  cuisine: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now },
});

export default restaurantSchema;
