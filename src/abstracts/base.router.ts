import { IUserRouter } from "../User/interfaces/user-router.interface";
import { Router } from "express";

export default abstract class BaseRoute implements IUserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}
