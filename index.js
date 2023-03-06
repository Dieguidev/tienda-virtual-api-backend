const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.listen(PORT, () =>{
  console.log("My port: " + PORT);
});
