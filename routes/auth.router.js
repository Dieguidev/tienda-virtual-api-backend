const express = require('express');
const passport = require('passport');
const AuthService = require('../services/auth.service');
const { loginAuthSchema, recoveryAuthSchema, changePasswordAuthSchema } = require('../schemas/auth.schema');
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router();
const service = new AuthService();

router.post('/login',
  validatorHandler(loginAuthSchema, 'body'),
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      console.log(user);
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  });

router.post('/recovery',
  validatorHandler(recoveryAuthSchema, 'body'),
  async (req, res, next) => {
    try {
      const { email } = req.body
      const rta = await service.sendRecovery(email);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  });

router.post('/change-password',
  validatorHandler(changePasswordAuthSchema, 'body'),
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
      const rta = await service.changePassword(token, newPassword);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
