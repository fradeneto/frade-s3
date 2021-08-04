import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(helmet());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(compression());
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
