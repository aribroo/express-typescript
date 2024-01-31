import { NextFunction, Request, Response } from "express";

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      // TODO register
      res.json("ini register");
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      // TODO Login
      res.json("ini register");
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController();
