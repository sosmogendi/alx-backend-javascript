const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split(/\r?\n/).filter(line => line.trim() !== '');
      const fields = {};
      let totalStudents = 0;

      for (let i = 1; i < lines.length; i++) {
        const [firstName, lastName, age, field] = lines[i].split(',');
        if (field) {
          totalStudents += 1;
          if (!fields[field]) {
            fields[field] = {
              count: 1,
              students: [firstName],
            };
          } else {
            fields[field].count += 1;
            fields[field].students.push(firstName);
          }
        }
      }

      console.log(`Number of students: ${totalStudents}`);
      for (const field of Object.keys(fields)) {
        const n = fields[field].count;
        const names = fields[field].students.join(', ');
        console.log(`Number of students in ${field}: ${n}. List: ${names}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
