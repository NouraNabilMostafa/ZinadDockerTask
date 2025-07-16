const express = require('express');
const app = express();
const port = 5000;

// Add CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/message', (req, res) => {
    res.send('Hello I am from backend. where are you from?');
});

app.listen(port, '0.0.0.0', () => {  // Listen on all network interfaces
    console.log(`Backend running on port ${port}`);
});