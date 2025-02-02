const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPosts');

 // Routes - sends data straight from my db to the client
 router.get('/', (req, res) => {
    BlogPost.find({  })
       .then((data) => {
           console.log('Data: ', data);
           res.json(data);
       })
       .catch((error) => {
           console.log('error: ', daerrorta);
       });
});

router.post('/save', (req, res) => {
  console.log('Body: ', req.body )
    res.json({
        msg: "We received your data!!!!"
    });
 })

router.get('/name', (req, res) => {
   const data = {
       username: 'larios',
       age: 22,
   }
   res.json(data);
})


module.exports = router;
