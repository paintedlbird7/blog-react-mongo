// Import npm packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8082; // Step 1


console.log("MongoDB URI:", process.env.MONGODB_URI);

// Assign the variable correctly
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube';

// Step 2
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube', {
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// listener
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

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