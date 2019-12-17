import { Router } from 'express';

import { catalogs } from '../controllers';

const router = Router();

/** Example route */
router.get('/', (req, res) => res.send('Hello World!'));

/** Catalogs */
router.get('/status', catalogs.listStatusTypes);
router.get('/request', catalogs.listRequestTypes);

export default router;
