import { NextFunction, Request, Response } from "express";
import { IUser } from "./interfaces/user.interface";
import { StatusCodes } from "http-status-codes";
import userService from "./user.service";

class UserController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createUserDto: IUser = req.body;
      const response = await userService.create(createUserDto);

      //
      res.status(StatusCodes.CREATED).json({ data: response });
    } catch (err) {
      next(err);
    }
  }

  findOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response<IUser>> {
    throw new Error("Method not implemented.");
  }
  findAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response<IUser>> {
    throw new Error("Method not implemented.");
  }
  update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response<IUser>> {
    throw new Error("Method not implemented.");
  }
  remove(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response<IUser>> {
    throw new Error("Method not implemented.");
  }
}

export default new UserController();
