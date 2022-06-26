const express = require('express');

const router = express.Router()
const controllers = require('../controllers');
const { authMiddleware } = require('../middlewares/auth');

router.get('/questions', [], controllers.surveysController.questions)
router.post('/', [], controllers.surveysController.create)
router.get('/', [authMiddleware], controllers.surveysController.find)
router.get('/:id', [authMiddleware], controllers.surveysController.findOne)
router.delete('/:id', [authMiddleware], controllers.surveysController.delete)

module.exports = {
  baseUrl: '/surveys',
  router,
}
