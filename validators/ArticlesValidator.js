const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      image: Joi.string().required().trim(),
      content: Joi.string().required().trim(),
      author: Joi.string().required().trim(),
      date: Joi.string().trim(),
      category: Joi.string().required().trim(),
      
    }),
  }),
};