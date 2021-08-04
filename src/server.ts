/* eslint-disable no-console */
import 'dotenv/config';
import 'reflect-metadata';
import http from 'http';

import app from './app';

const port = process.env.PORT || 3333;

const server = http.createServer(app).listen(port, () => {
  console.log(
    `Express server listening on port ${port} | NODE_ENV=${process.env.NODE_ENV}`,
  );
});
