const express = require('express');

const app = express();
const PORT = 7865;

// body-parser middleware for express
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(paymentMethods);
});

app.post('/login', (req, res) => {
  if (!req.body || !req.body.userName) {
    // If req.body or req.body.userName is undefined, return a 400 Bad Request response
    res.status(400).send('Bad Request: userName is missing');
  } else {
    const { userName } = req.body;
    res.send(`Welcome ${userName}`);
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
