const express = require("express");
const router = express.Router();
const BlogPost = require("../models/blogPosts");

// Routes - sends data straight from my db to the client
router.get("/", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

router.post('/save', async (req, res) => {
    try {
      const data = req.body;
      const newBlogPost = new BlogPost(data);
      
      await newBlogPost.save(); // ✅ No callbacks, using async/await
  
      res.json({ msg: "Your data has been saved!!!!" });
    } catch (error) {
      console.error("Save error:", error);
      res.status(500).json({ msg: "Sorry, internal server error" });
    }
  });  

router.get("/name", (req, res) => {
  const data = {
    username: "larios",
    age: 22,
  };
  res.json(data);
});

module.exports = router;
