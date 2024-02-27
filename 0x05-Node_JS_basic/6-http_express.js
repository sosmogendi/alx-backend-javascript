const express = require('express');

const app = express();
const serverPort = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(serverPort, () => {
  //   console.log(`Server running at http://localhost:${serverPort}`);
});

module.exports = app;
