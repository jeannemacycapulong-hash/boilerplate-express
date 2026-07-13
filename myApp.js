let express = require('express');
let app = express();

// 1. Meet the Node console (From previous step)
console.log("Hello World");

// 2. Start a Working Express Server
app.get("/", (req, res) => {
  res.send("Hello Express");
});

 module.exports = app;