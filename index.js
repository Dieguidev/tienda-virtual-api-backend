const express = require('express');
const app = express();
const PORT = 3000;

const { faker } = require('@faker-js/faker');

// app.get("/", (req, res) =>{
//   res.send("Hola mi server en Express");
// });

app.get("/products", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })

  }
  res.json(products);
});

app.listen(PORT, () => {
  console.log("My port: " + PORT);
});
