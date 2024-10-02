import { createConnection } from 'mongoose';
import Tenant from '../models/Tenant.js';

async function connectTenantDb(req, res, next) {
  const subdomain = req.headers.host.split('.')[0];  // client1.myapp.com => client1

  try {
    const tenant = await Tenant.findOne({ tenantName: subdomain });
    if (!tenant) {
      return res.status(404).json({ message: 'Tenant not found' });
    }

    const tenantDb = createConnection(tenant.dbConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    req.tenantDb = tenantDb;  // Attach tenant DB connection to request
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to tenant database', error });
  }
}

export default connectTenantDb;
