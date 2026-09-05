const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello billorani ka ho to abhi jan dedu.' 
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'Healthy', 
    timestamp: new Date().toISOString() 
  });
});

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});