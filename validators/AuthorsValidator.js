const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
        author: 
        content: Joi.string().required().trim(),
        picture: Joi.string().required(),
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        biography: Joi.string().required().trim(),
        location: Joi.string().required().trim(),
        posts: Joi.string().required(),
    }),


