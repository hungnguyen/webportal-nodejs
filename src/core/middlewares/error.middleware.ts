import { NextFunction, Request, Response } from 'express';

import HerokuLogger from 'heroku-logger';
import { HttpException } from '@core/exceptions';
import { Logger } from '@core/utils';

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  const status: number = error.status || 500;
  const message: string = error.message || 'Some thing when wrong';

  Logger.error(`[ERROR] - Status: ${status} - Msg: ${message}`);
  HerokuLogger.error(`[ERROR] - Status: ${status} - Msg: ${message}`);
  res.status(status).json({ message: message });
};