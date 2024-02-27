const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const response = [];
      let message;

      const content = data.toString().split('\n');

      let studentRecords = content.filter((line) => line);

      studentRecords = studentRecords.map((record) => record.split(','));

      const totalStudents = studentRecords.length ? studentRecords.length - 1 : 0;
      message = `Number of students: ${totalStudents}`;
      console.log(message);

      response.push(message);

      const fields = {};
      for (const index in studentRecords) {
        if (index !== 0) {
          if (!fields[studentRecords[index][3]]) fields[studentRecords[index][3]] = [];

          fields[studentRecords[index][3]].push(studentRecords[index][0]);
        }
      }

      delete fields.field;

      for (const key of Object.keys(fields)) {
        message = `Number of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`;

        console.log(message);

        response.push(message);
      }
      resolve(response);
    });
  });
}

module.exports = countStudents;
