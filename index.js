const express = require('express');
const cors = require('cors')
const { logErrors, errorHandles, boomErrorHandler } = require('./middlewares/error.handler');
const app = express();
const PORT = 3000;
const routerApi = require('./routes/index.router');

app.use(express.json());

const whiteList = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors());

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandles);

app.listen(PORT, () => {
  console.log("My port: " + PORT);
});
