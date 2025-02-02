// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

// HTTP request logger
app.use(morgan('tiny'));

app.get('/api', (req, res) => {
    const data = {
        username: 'rosaperez',
        age: 22,
    }
    res.json(data);
})

app.get('/name', (req, res) => {
    const data = {
        username: 'larios',
        age: 22,
    }
    res.json(data);
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`));