const express = require('express');

const router = express.Router()
const controllers = require('../controllers');
const { authMiddleware } = require('../middlewares/auth');

router.post('/login', [], controllers.authController.login)
router.get('/me', [authMiddleware], controllers.authController.me)

module.exports = {
  baseUrl: '/auth',
  router,
}
