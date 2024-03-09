/**
 * Module dependencies.
 */
const express = require('express');

// Initialize Express app
const app = express();

// Define the port
const PORT = 7865;

// Middleware to parse JSON bodies
app.use(express.json());

/**
 * Route to handle requests to the root endpoint.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

/**
 * Route to handle requests to the /cart/:id endpoint.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

/**
 * Route to handle requests to the /available_payments endpoint.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

/**
 * Route to handle login requests.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.post('/login', (req, res) => {
  let username = '';
  if (req.body) {
    username = req.body.userName;
  }
  res.send(`Welcome ${username}`);
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the Express app
module.exports = app;

