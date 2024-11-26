import fs from 'fs';
import csvParser from 'csv-parser';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    const fields = {};
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (row) => {
        const field = row.field;
        const firstname = row.firstname;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      })
      .on('end', () => resolve(fields))
      .on('error', (err) => reject(err));
  });
};
