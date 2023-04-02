const express = require('express');
const cors = require('cors')
const { logErrors, errorHandles, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
const app = express();
const PORT = process.env.PORT || 3000;
const routerApi = require('./routes/index.router');
const { checkApiKey } = require('./middlewares/auth.handler');

app.use(express.json());

const whiteList = ['http://localhost:3000', 'https://myapp.co'];
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

require('./utils/auth')

app.get('/',(req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler)
app.use(boomErrorHandler);
app.use(errorHandles);

app.listen(PORT, () => {
  console.log("My port: " + PORT);
});
