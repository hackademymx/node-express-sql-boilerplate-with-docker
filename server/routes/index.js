import { Router } from 'express';
const router = Router();

import { example, user } from '../controllers';

router.route('/example').get(example.getExampleController);

router
  .route('/users')
  .post(user.addUser)
  .get(user.getUsers);

router.route('/users/:id').get(user.getUsersById);

export default router;
