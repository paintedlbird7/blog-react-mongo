const mongoose = require('mongoose');

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

module.exports =  BlogPost;