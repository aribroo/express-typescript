import { NextFunction, Request, Response } from "express";
import { IUser } from "./user.interface";

export default interface IUserController {
  create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser> | void>;
  findOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser> | void>;
  findAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser> | void>;
  update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser> | void>;
  remove(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser> | void>;
}
