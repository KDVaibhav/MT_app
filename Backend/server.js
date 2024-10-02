import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; 
import connectTenantDb from './middlewares/connectTenantDb.js';
import restaurantRoutes from './routes/restaurantRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5000;

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("MongoDB URI not set in environment variables");
  process.exit(1);
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to shared DB'))
  .catch((error) => console.log('Error connecting to shared DB:', error));

app.use(connectTenantDb);
app.use('/restaurants', restaurantRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
