let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();

// 1. Meet the Node console
console.log("Hello World");

// 7. Root-Level Request Logger Middleware
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// 11. Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }));

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

// 8. Chain Middleware to Create a Time Server
app.get("/now", function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ "time": req.time });
});

app.get("/:word/echo", function(req, res) {
  res.json({ "echo": req.params.word });
});

app.get("/name", function(req, res) {
  res.json({ "name": req.query.first + " " + req.query.last });
});

// 12. Get Data from POST Requests
app.post("/name", function(req, res) {
  res.json({ "name": req.body.first + " " + req.body.last });
});






























 module.exports = app;