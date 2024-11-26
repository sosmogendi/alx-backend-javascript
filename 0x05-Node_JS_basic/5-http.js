const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const dbPath = process.argv[2];
    if (!dbPath) {
      res.end('Database path is missing\n');
    } else {
      countStudents(dbPath)
        .then(() => {
          res.end();
        })
        .catch((error) => {
          res.end(error.message + '\n');
        });
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;

