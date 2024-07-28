const express = require('express');
const path = require('path');
const homeRoutes = require('./routes/home');
const app = express();
const port = 4000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Use home routes
app.use('/', homeRoutes);

// Handle favicon request
app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(port, () => {
    console.log(`Weather app listening at http://localhost:${port}`);
});