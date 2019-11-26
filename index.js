import server from './server';

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server is running at ${PORT}`));
