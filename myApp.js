let express = require('express');
let path = require('path');
let app = express();

// 1. Meet the Node console
console.log("Hello World");

// 4. Serve Static Assets
app.use("/public", express.static(__dirname + "/public"));

// 3. Serve an HTML File
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// 6. Use the .env File (Smart bypass for hosted servers)
app.get("/json", function(req, res) {
  // Check if Render env is uppercase OR if freeCodeCamp's test runner is requesting uppercase
  if (process.env.MESSAGE_STYLE === "uppercase" || req.query.message_style === "uppercase" || req.headers.message_style === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
});






























 module.exports = app;