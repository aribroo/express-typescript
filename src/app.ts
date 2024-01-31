import express, { Application } from "express";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import { config as dotenv } from "dotenv";

// Routes
import userRoute from "./User/user.route";
import authRoute from "./Auth/auth.route";

import ErrorMiddleware from "./middlewares/error.middleware";

export default class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.Routes();
    dotenv();
  }

  private plugins(): void {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private Routes(): void {
    this.app.use("/auth", authRoute);
    this.app.use("/users", userRoute);
    this.app.use(ErrorMiddleware.handle.bind(ErrorMiddleware));
  }
}
