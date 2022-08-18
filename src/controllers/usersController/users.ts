import { Request, Response } from "express";
import { User, IUsersType } from "../../models/users";
import { UserService } from "../../services/usersService";

const getAllUsers = async (req: Request, res: Response) => {
  const users: User[] = await UserService.getAllUsersQuery();
  return res.status(200).json(users);
}

const insertUser = async (req: Request, res: Response) => {
  const { email, name }: IUsersType = req.body;
  const users = User.create({email, name});
  const response = await UserService.insertUserQuery(users);
  return res.status(200).json(response);
}

export { getAllUsers, insertUser };