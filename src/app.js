const express = require('express');
const { loginController } = require('./controller');
const routerUser = require('./routers/user.router');
const { emailValidation, loginValidation } = require('./middlewares/validateLogin');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/user', routerUser);
app.post('/login', loginValidation, emailValidation, loginController.Login);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
