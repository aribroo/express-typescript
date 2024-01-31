import { Request, Response, NextFunction } from "express";
import { ResponseError } from "../errors/response-error";
import { StatusCodes } from "http-status-codes";

class ErrorMiddleware {
  handle(err: Error, req: Request, res: Response, next: NextFunction): void {
    if (err instanceof ResponseError) {
      res.status(err.statusCode).json({
        statusCode: err.statusCode,
        errors: err.message,
      });
    }

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      errors: "Internal Server Error",
    });
  }
}

export default new ErrorMiddleware();
