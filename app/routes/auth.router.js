const express = require('express');

const router = express.Router()
const controllers = require('../controllers');
const { authMiddleware } = require('../middlewares/auth');

router.post('/register', [], controllers.authController.register)
router.post('/login', [], controllers.authController.login)
router.get('/me', [authMiddleware], controllers.authController.me)

module.exports = {
  baseUrl: '/auth',
  router,
}
