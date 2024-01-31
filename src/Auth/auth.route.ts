import BaseRoute from "../abstracts/base.router";
import authController from "./auth.controller";

class AuthRoute extends BaseRoute {
  routes(): void {
    this.router.post("/register", authController.register);
    this.router.post("/login", authController.login);
  }
}

export default new AuthRoute().router;
