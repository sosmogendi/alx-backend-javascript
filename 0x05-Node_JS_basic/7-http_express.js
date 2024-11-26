const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 1245;

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    const students = {};
    let totalStudents = 0;
    
    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        if (row.field && row.firstname) {
          totalStudents++;
          if (!students[row.field]) {
            students[row.field] = [];
          }
          students[row.field].push(row.firstname);
        }
      })
      .on('end', () => {
        if (totalStudents === 0) {
          reject(new Error('Cannot load the database'));
        }
        let result = `Number of students: ${totalStudents}\n`;
        for (const [field, names] of Object.entries(students)) {
          result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        resolve(result);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dbPath = process.argv[2];
  if (!dbPath) {
    return res.status(400).send('Database file path is required');
  }
  
  try {
    const studentsData = await countStudents(dbPath);
    res.send(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});

module.exports = app;
