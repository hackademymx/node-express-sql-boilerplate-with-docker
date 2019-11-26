import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../routes';

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(bodyParser.json());

server.use('/api', routes);

module.exports = server;
