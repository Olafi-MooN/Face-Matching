import { UsersProps } from "../../models/users";
import { QueryToAsync } from "../../utils/queryToPromise";

async function getAllUsersQuery(): Promise<UsersProps[]> {
  return QueryToAsync<UsersProps[]>('select * from Users', null);
}

async function insertUserQuery(users: UsersProps): Promise<UsersProps[]> {
  return QueryToAsync<UsersProps[]>('INSERT INTO Users(id,name,email) VALUES (?,?,?);', [...Object.values(users)]);
}

export { getAllUsersQuery, insertUserQuery }