const express = require('express');
const app = express();
const PORT = process.env.PORT || 7865;

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

app.get('/', (req, res) => {
    res.end('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.end(`Payment methods for cart ${id}`);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;
