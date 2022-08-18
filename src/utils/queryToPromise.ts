import { db_mysql } from "../config/my-sql.config";

function QueryToAsync<T>(query: string, values?: string[] | null): Promise<T> { 
  return new Promise((resolve, reject) => {
    db_mysql.query(query, values, function (error, results, fields) {
      if (error) throw error;
      resolve(JSON.parse(JSON.stringify(results)) as T);
    });
  })
}

export { QueryToAsync };