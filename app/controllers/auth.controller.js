const models = require('../models');
const response = require('../functions/serviceUtil.js');
const auth = require('../middlewares/auth.js');
const CustomError = require('../functions/CustomError');

module.exports = {
  name: 'authController',

  register: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        const user = models.User
        if (!req.body.email) throw new CustomError('email Attribute is required', 412)
        if (!req.body.password) throw new CustomError('password Attribute is required', 412)

        user.email = req.body.email
        user.password = req.body.password

        const redisteredUser = await models.User.create(user)

        return redisteredUser
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
      
    } catch (error) {
      next(error)
    }
  },

  login: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        if (!req.body.password) throw new CustomError('Please send a Password', 412);

        const user = await models.User.findOne({
          where: {
            email: req.body.email,
          },
          transaction,
        })

        if (!user) throw new CustomError('Incorrect User or Password', 401)
        if (!user.checkPassword(req.body.password)) throw new CustomError('Incorrect User or Password', 401)
        
        return {
          _accessToken: auth.generateAccessToken({
            id: user.id,
            name: user.name,
            email: user.email,
          }),
          user,
        }
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
    } catch (error) {
      next(error)
    }
  },

  me: async (req, res, next) => {
    try {
      res.status(200).send(response.getResponseCustom(200, req.user))
      res.end()
    } catch (error) {
      next(error)
    }
  },
}