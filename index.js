const express = require('express');
const { logErrors, errorHandles,boomErrorHandler } = require('./middlewares/error.handler');
const app = express();
const PORT = 3000;
const routerApi = require('./routes/index.router');

app.use(express.json());

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandles);

app.listen(PORT, () => {
  console.log("My port: " + PORT);
});
