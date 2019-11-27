import { Router } from 'express';

import { defaultCrt, gigs } from '../controllers';

const router = Router();

router.get('/', (req, res) =>
  res.send('Hello this is a node/express/postgres boilerplate using docker')
);
router.get('/sum', defaultCrt.sum);
router.get('/multiply', defaultCrt.multiply);
router.get('/gimeSome', gigs.getAll);
router.get('/addgigs', gigs.add);

export default router;
