let express = require('express');
let path = require('path');
let app = express();

console.log("Hello World");

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// 5. Serve JSON on a Specific Route
app.get("/json", function(req, res) {
  res.json({ "message": "Hello json" });
});






























 module.exports = app;