const models = require('../models');
const response = require('../functions/serviceUtil.js');

module.exports = {
  name: 'surveysController',

  questions: async (req, res, next) => {
    try {
      const questions = await models.Question.findAll()
      if (!questions) res.status(404).send(response.getErrorResponseCustom(404, 'Questions not found')).res.end()

      res.status(200).send(response.getResponseCustom(200, questions))
      res.end()
    } catch (error) {
      next(error)
    }
  },
  
  create: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        const createSurvey = new models.Survey()
        const answers = req.body.answers

        createSurvey.name = req.body.name
        createSurvey.suggestion = req.body.suggestion
        createSurvey.address = req.body.address
        createSurvey.age = req.body.age
        createSurvey.job = req.body.job
        createSurvey.disuruh = req.body.disuruh
        createSurvey.satisfaction = 0

        answers.forEach(answer => {
          createSurvey.satisfaction += answer
        });

        createSurvey.satisfaction = parseInt(createSurvey.satisfaction / 65 * 100)

        const survey = await models.Survey.create(createSurvey.dataValues, { transaction })
        const survey_id = survey.id

        await Promise.all([
          models.Answer.create({ survey_id, question_id: 1, answer: answers[0] }, { transaction }),
          models.Answer.create({ survey_id, question_id: 2, answer: answers[1] }, { transaction }),
          models.Answer.create({ survey_id, question_id: 3, answer: answers[2] }, { transaction }),
          models.Answer.create({ survey_id, question_id: 4, answer: answers[3] }, { transaction }),
          models.Answer.create({ survey_id, question_id: 5, answer: answers[4] }, { transaction }),
          models.Answer.create({ survey_id, question_id: 6, answer: answers[5] }, { transaction }),
          models.Answer.create({ survey_id, question_id: 7, answer: answers[6] }, { transaction }),
          models.Answer.create({ survey_id, question_id: 8, answer: answers[7] }, { transaction }),
          models.Answer.create({ survey_id, question_id: 9, answer: answers[8] }, { transaction }),
        ])

        return survey
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
    } catch (error) {
      next(error)
    }
  },

  find: async (req, res, next) => {
    try {
      const surveys = await models.Survey.findAll({
        include: [{
          model: models.Answer,
          include: [{
            model: models.Question
          }]
        }]
      });
      if (!surveys) res.status(404).send(response.getErrorResponseCustom(404, 'Surveys not found')).res.end()

      res.status(200).send(response.getResponseCustom(200, surveys))
      res.end()
    } catch (error) {
      next(error)
    }
  },
  
  findOne: async (req, res, next) => {
    try {
      const survey = await models.Survey.findByPk(req.params.id, { include: models.Answer })
      if (!survey) res.status(404).send(response.getErrorResponseCustom(404, 'Survey not found')).res.end()

      res.status(200).send(response.getResponseCustom(200, survey))
      res.end()
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
      const survey = await models.Survey.findByPk(req.params.id, { include: models.Answer })
      if (!survey) res.status(404).send(response.getErrorResponseCustom(404, 'Survey not found')).res.end()

      res.status(200).send(response.getResponseCustom(200, survey))
      res.end()
    } catch (error) {
      next(error)
    }
  },
}