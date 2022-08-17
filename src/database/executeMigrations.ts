import fs from 'fs';
import { readFile } from 'fs';
import { db_mysql } from '../config/my-sql.config';

const executeQueryAsync = async (data: Buffer) => {
  return new Promise(resolve => {
    db_mysql.connect();
    db_mysql.query(data.toString(), (err, result) => {
      if (err) throw Error('Fail in db_mysql\n' + err);
      resolve(JSON.stringify(result))
    })
    db_mysql.end();
  })
}

console.log('Migration Started 🚀');
console.time('Execute in: ');
fs.readdir(__dirname + '/migrations', (err, files) => {
  if (err) throw new Error('Fail in access directory \n' + err);
  files.forEach(fileName => {
    readFile(`${__dirname}/migrations/${fileName}`, async (err, data) => {
      if (err) throw Error('Fail in ReadFile\n' + err);
      await executeQueryAsync(data);
      console.log('Migration Finished 🤩🤗');
      console.timeEnd('Execute in: ');
    });
  });
});

