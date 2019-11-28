import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

/** DB */
import db from './config/database';
import models from './models';

/** TEST db */
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error DB => ', err));

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(bodyParser.json());

server.use('/api', routes);

module.exports = server;
