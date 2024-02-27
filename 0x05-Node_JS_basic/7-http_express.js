const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const databaseFilename = args[0];

const app = express();
const serverPort = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(databaseFilename);
    response.send(`${msg}${students.join('\n')}`);
  } catch (error) {
    response.send(`${msg}${error.message}`);
  }
});

app.listen(serverPort, () => {
  //   console.log(`Example app listening at http://localhost:${serverPort}`);
});

module.exports = app;
