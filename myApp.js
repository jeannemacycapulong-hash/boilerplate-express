let express = require('express');
let app = express();

// 1. Meet the Node console
console.log("Hello World");

// 2. Start a Working Express Server
app.get("/", function(req, res) {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});






























 module.exports = app;