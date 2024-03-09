const express = require('express');
const app = express();
const PORT = process.env.PORT || 7865;

const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

app.get('/', (req, res) => {
    res.end('Welcome to the payment system');
});

module.exports = server; // Export the server for testing purposes
