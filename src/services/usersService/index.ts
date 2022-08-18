import { User } from "../../models/users";
import { QueryToAsync } from "../../utils/queryToPromise";

async function getAllUsersQuery(): Promise<User[]> {
  return QueryToAsync<User[]>('select * from Users', null);
}

async function insertUserQuery(users: User): Promise<User[]> {
  return QueryToAsync<User[]>('INSERT INTO Users(id,name,email) VALUES (?,?,?);', [...Object.values(users)]);
}

export { getAllUsersQuery, insertUserQuery }