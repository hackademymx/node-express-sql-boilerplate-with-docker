import { Router } from 'express';

import { defaultCrt } from '../controllers';

const router = Router();

router.get('/', (req, res) => res.send('Hello world!'));
router.get('/sum', defaultCrt.sum);
router.get('/multiply', defaultCrt.multiply);

export default router;
