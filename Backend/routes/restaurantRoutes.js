import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => {
  const Restaurant = req.tenantDb.model('Restaurant', require('../models/Restaurant'));
  const Settings = req.tenantDb.model('Settings', require('../models/Settings'));

  try {
    const settings = await Settings.findOne({});
    const restaurants = await Restaurant.find({}).limit(settings.restaurantDisplayLimit);

    res.json({
      restaurants,
      colorCode: settings.colorCode,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});

export default router;
