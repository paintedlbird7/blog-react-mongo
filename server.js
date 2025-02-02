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
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube';

// Step 2 Connect mongo
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube', {
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// listener
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Define our schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Define our model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// Use that model to start saving data to our mongo db
const data = {
    title: "Welcome to my Blog",
    body: "I am a fullstack developer"
}

const newBlogPost = new BlogPost(data); // Instance of a model

// .save()
async function saveData() {
    try {
      const savedData = await newBlogPost.save();
      console.log("Data saved successfully:", savedData);
    } catch (err) {
      console.error("Error saving data:", err);
    }
  }
  saveData();
  



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