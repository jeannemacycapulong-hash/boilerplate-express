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

// 6. Use the .env File (Bulletproof fix for freeCodeCamp test runner)
app.get("/json", function(req, res) {
  // We force a dynamic check by reading the raw value right when the endpoint is hit
  const messageStyle = process.env.MESSAGE_STYLE;
  
  if (messageStyle === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
});






























 module.exports = app;