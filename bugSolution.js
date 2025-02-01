const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a database error
      throw new Error('Database error');
    }
    res.send('Hello from Express!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});