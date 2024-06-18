// Create web server
var express = require('express');
var app = express();

// Read comments from file
var fs = require('fs');
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Get comments
app.get('/comments', function (req, res) {
  res.json(comments);
});

// Post comments
app.post('/comments', function (req, res) {
  comments.push(req.body);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.json(comments);
});

// Listen to port 3000
app.listen(3000, function () {
  console.log('Server listening on port 3000');
});