require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const {setupLogging} = require('./logging');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4200;

// Logging
setupLogging(app);

// Middleware
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });