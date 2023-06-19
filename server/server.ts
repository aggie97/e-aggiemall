import express from 'express';
// import { createServer } from 'http';
import next from 'next';

const dev = process.env.NODE_ENV === 'development';
const port = 3000;
const app = next({ dev, port });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/getData', () => {
    console.log('hello');
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log('ready');
  });
});
