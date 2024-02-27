const http = require('http');

const serverAddress = '127.0.0.1';
const serverPort = 1245;

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

app.listen(serverPort, serverAddress, () => {
  //   console.log(`Server running at http://${serverAddress}:${serverPort}/`);
});

module.exports = app;
