import { Router } from 'express';
const router = Router();

import { example, user, teacher } from '../controllers';

router.route('/example').get(example.getExampleController);

router
  .route('/users')
  .post(user.addUser)
  .get(user.getUsers);

router.route('/users/:id').get(user.getUsersById);

router.route('/teachers').post(teacher.addTeacher);
router.route('/teachers/:id').get(teacher.getTeachers);
router.post('/courses', teacher.addCourse);
router.post('/association', teacher.addAssocitation);

export default router;
