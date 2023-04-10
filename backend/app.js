const express = require('express');

const app = express();


app.use('/api/posts',(req, res, next) => {
  const posts = [
    { id : '1234',
      title : 'Server-side post',
      content : 'Server shit INCOMIIIING!'
    },
    { id : '2345',
      title : 'Second Server-side post',
      content : 'Server shit x2 INCOMIIIING!'
    }
  ];
  res.status(200).json({
    message: "Posts fetched suceessfully!",
    posts: posts
  });
});

module.exports = app;
