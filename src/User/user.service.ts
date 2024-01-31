import { StatusCodes } from "http-status-codes";
import { ResponseError } from "../errors/response-error";
import { IUser } from "./interfaces/user.interface";

export class UserService {
  async create(createUserDto: IUser) {
    return "User Creted!";
  }

  async findAll() {
    throw new ResponseError("Error", StatusCodes.CONFLICT);
  }
}

export default new UserService();
