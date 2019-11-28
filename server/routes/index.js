import { Router } from 'express';

import { defaultCrt, user, message } from '../controllers';

const router = Router();

/** Example route */
router.get('/', (req, res) => res.send('Hello World!'));
/** Example route */
router.get('/sum', defaultCrt.sum);
/** Example route */
router.get('/multiply', defaultCrt.multiply);
/** Example route */
router.get('/users', user.getUsers);
/** Example route */
router.get('/users/:userId', user.getUserById);
/** Example route */
router.get('/messages', message.getMessages);
/** Example route */
router.get('/messages/:messageId', message.getMessageById);
/** Example route */
router.post('/messages', message.addMessage);
/** Example route */
router.delete('/messages/:messageId', message.deleteMessage);

export default router;
