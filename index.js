const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

// Enable CORS
app.use(cors());

// Test GET endpoint
app.get('/test', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
