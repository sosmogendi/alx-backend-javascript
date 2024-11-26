const fs = require('fs');

/**
 * Reads a CSV file containing student data and logs the number of students
 * as well as the breakdown of students by field.
 *
 * @param {string} path - The path to the CSV file to read.
 * 
 * The CSV file is expected to have the following format:
 * firstname,lastname,age,field
 * 
 * If the file is not found or there is an error reading the file, an error is thrown
 * with the message 'Cannot load the database'.
 * 
 * It logs the following:
 * - Total number of students.
 * - Number of students in each field and their names.
 */
function countStudents(path) {
  try {
    const results = fs.readFileSync(path, { encoding: 'utf8' }).split(/\r?\n/);
    const fields = {};
    let countStudents = 0;

    results.slice(1).forEach((line) => {
      if (line.trim() !== '') {
        const [fname, , , field] = line.split(',');

        if (fname && field) {
          countStudents += 1;

          if (!fields[field]) {
            fields[field] = {
              count: 1,
              students: [fname],
            };
          } else {
            fields[field].count += 1;
            fields[field].students.push(fname);
          }
        }
      }
    });

    console.log(`Number of students: ${countStudents}`);
    for (const field of Object.keys(fields)) {
      const { count, students } = fields[field];
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
