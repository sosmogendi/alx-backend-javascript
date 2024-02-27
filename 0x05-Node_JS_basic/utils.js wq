const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, fileData) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const studentRows = fileData.toString().split('\n');

      let studentEntries = studentRows.filter((item) => item);

      studentEntries = studentEntries.map((item) => item.split(','));

      const studentFields = {};
      for (let i = 1; i < studentEntries.length; i++) {
        const field = studentEntries[i][3];
        const firstName = studentEntries[i][0];
        if (!studentFields[field]) studentFields[field] = [];
        studentFields[field].push(firstName);
      }

      resolve(studentFields);
    });
  });
}

module.exports = readDatabase;
