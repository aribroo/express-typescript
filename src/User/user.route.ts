import UserController from "./user.controller";
import BaseRoute from "../abstracts/base.router";

class UserRoutes extends BaseRoute {
  routes(): void {
    this.router.post("/", UserController.create);
    this.router.get("/", UserController.findAll);
    // this.router.get("/:id", UserController.findOne);
    // this.router.patch("/:id", UserController.update);
    // this.router.delete("/:id", UserController.remove);
  }
}

export default new UserRoutes().router;
