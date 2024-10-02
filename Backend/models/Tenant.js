import { Schema, model } from 'mongoose';

const tenantSchema = new Schema({
  tenantName: { type: String, required: true, unique: true },
  dbConnectionString: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model('Tenant', tenantSchema);
