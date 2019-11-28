import server from './server';
import db from './server/config/database';
import models from './server/models';

const PORT = process.env.PORT || 5000;

/** ERASE DATABASE WHEN THE SERVER STARTS */
const eraseDatabaseOnSync = false;

db.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }
  server.listen(PORT, () => console.log(`server is running at ${PORT}`));
});

/** Example - SEED DATABASE USER (Only once) */
// const createUsersWithMessages = async () => {
//   await models.User.create(
//     {
//       username: 'rwieruch',
//       messages: [
//         {
//           text: 'Published the Road to learn React'
//         }
//       ]
//     },
//     {
//       include: [models.Message]
//     }
//   );
//   await models.User.create(
//     {
//       username: 'ddavids',
//       messages: [
//         {
//           text: 'Happy to release ...'
//         },
//         {
//           text: 'Published a complete ...'
//         }
//       ]
//     },
//     {
//       include: [models.Message]
//     }
//   );
// };
