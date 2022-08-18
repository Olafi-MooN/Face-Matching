import { Request, Response } from "express";
import { v4 } from 'uuid';
import { UsersProps } from "../../models/users";
import { getAllUsersQuery, insertUserQuery } from "../../services/usersService";

const getAllUsers = async (req: Request, res: Response) => {
  let users: UsersProps[] = [] as UsersProps[];
  users = await getAllUsersQuery();
  return res.status(200).json(users);
}

const insertUser = async (req: Request, res: Response) => {
  const { email, name }: UsersProps = req.body;
  let users: UsersProps[] = [] as UsersProps[];
  users = await insertUserQuery({ id: v4(), name, email });
  return res.status(200).json(users);
}

export { getAllUsers, insertUser };