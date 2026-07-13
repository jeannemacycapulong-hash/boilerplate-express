let express = require('express');
let path = require('path');
let app = express();

// 1. Meet the Node console
console.log("Hello World");

// 4. Serve Static Assets (Updated with string path syntax)
app.use("/public", express.static(__dirname + "/public"));

// 3. Serve an HTML File
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});






























 module.exports = app;