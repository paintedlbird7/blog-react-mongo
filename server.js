// Import npm packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const { title } = require('process');

const app = express();
const PORT = process.env.PORT || 8082; // Step 1

console.log("MongoDB URI:", process.env.MONGODB_URI);

// Assign the variable correctly
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube';

const routes = require('./routes/api');

// Step 2 Connect mongo
mongoose.connect('mongodb://localhost/mern_youtube', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// listener
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));