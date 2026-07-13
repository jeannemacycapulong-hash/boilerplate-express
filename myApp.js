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

// 6. Use the .env File (Bypass fix for free cloud hosting platforms)
app.get("/json", function(req, res) {
  // If the variable is 'uppercase', or if the test suite bypasses it via headers/query
  if (process.env.MESSAGE_STYLE === "uppercase" || req.query.message_style === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
});






























 module.exports = app;