const fs = require('fs');

function countStudents(path) {
  let fileContent;

  try {
    fileContent = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  fileContent = fileContent.toString().split('\n');

  let students = fileContent.filter((line) => line);

  students = students.map((record) => record.split(','));

  const totalStudents = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${totalStudents}`);

  const fields = {};
  for (const index in students) {
    if (index !== 0) {
      if (!fields[students[index][3]]) fields[students[index][3]] = [];

      fields[students[index][3]].push(students[index][0]);
    }
  }

  delete fields.field;

  for (const key of Object.keys(fields)) {
    console.log(
      `Number of students in ${key}: ${fields[key].length}. List: ${fields[
        key
      ].join(', ')}`,
    );
  }
}

module.exports = countStudents;
