import { Request, Response } from "express";
import { v4 } from 'uuid';
import { db_mysql } from "../config/my-sql.config";

type Users = {
  id: string;
  name: string;
  email: string;
}

async function getAllUsersQuery(): Promise<Users[]> {
  return new Promise((resolve, reject) => {
    db_mysql.query('select * from Users', function (error, results, fields) {
      if (error) throw error;
      resolve(JSON.parse(JSON.stringify(results)) as Users[]);
    });
  })
}

async function insertUserQuery(users: Users): Promise<Users[]> {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO Users(id,name,email) VALUES (?,?,?);';
    const values = [...Object.values(users)]
    db_mysql.query(sql, values, function (error, results, fields) {
      if (error) throw error;
      resolve(JSON.parse(JSON.stringify(results)) as Users[]);
    });
  })
}

const getAllUsers = async (req: Request, res: Response) => {
  let users: Users[] = [] as Users[];
  users = await getAllUsersQuery();
  return res.status(200).json(users);
}

const insertUser = async (req: Request, res: Response) => {
  const { email, name }: Users = req.body;

  let users: Users[] = [] as Users[];
  users = await insertUserQuery({id: v4(), name, email});
  return res.status(200).json(users);
}

export { getAllUsers, insertUser };