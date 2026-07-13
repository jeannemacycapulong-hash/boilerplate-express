let express = require('express');
let path = require('path');
let app = express();

// 1. Meet the Node console
console.log("Hello World");

// 7. Root-Level Request Logger Middleware
// This must be placed ABOVE all your route definitions
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next(); // Call next() so Express moves to the next handler!
});

// 4. Serve Static Assets
app.use("/public", express.static(__dirname + "/public"));

// 3. Serve an HTML File
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// 6. Use the .env File
app.get("/json", function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ "message": message });
});






























 module.exports = app;