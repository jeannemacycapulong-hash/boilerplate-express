let express = require('express');
let path = require('path');
let app = express();

// 1. Meet the Node console
console.log("Hello World");

// 3. Serve an HTML File using path.join
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});






























 module.exports = app;