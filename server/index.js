import express from 'express';
import routes from '../routes';

const server = express();

console.log('algo s');

server.use(express.json());

server.use('/api', routes);

export default server;
