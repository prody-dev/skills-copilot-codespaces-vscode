
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set up the server
app.listen(port, () => {
    console.log('Server running on port ' + port);
});

// Comments
app.get('/', (req, res) => {
    res.send('Hello from Express');
});