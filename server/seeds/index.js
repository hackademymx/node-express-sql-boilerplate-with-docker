import db from '../config/database';
import models from '../models';

import { STATUS_TYPES } from './status-types';
import { REQUEST_TYPES } from './request-types';

const seed = async () => {
  await db.sync({ force: true });

  await models.Status.bulkCreate(STATUS_TYPES);
  await models.Request.bulkCreate(REQUEST_TYPES);
};

seed();
