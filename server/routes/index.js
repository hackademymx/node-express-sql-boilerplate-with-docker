import { Router } from 'express';

import { catalogs, user, employee } from '../controllers';

const router = Router();

/** Example route */
router.get('/', (req, res) => res.send('Hello World!'));

/** Catalogs */
router.get('/status', catalogs.listStatusTypes);
router.get('/request', catalogs.listRequestTypes);

/** User */
router.post('/users', user.add);
router.get('/users', user.list);
router.get('/users/:userId', user.byId);
router.delete('/users/:userId', user.remove);
router.put('/users/:userId', user.updateUser);

/** Employee */
router.post('/employees', employee.add);
router.get('/employees', employee.list);
router.get('/employees/:id', employee.byId);
router.delete('/employees/:id', employee.remove);
router.put('/employees/:id', employee.updateEmployee);

export default router;
