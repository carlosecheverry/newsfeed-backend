const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      author: Joi.string().required().trim(),
      content: Joi.string().required().trim(),
    }),
  }),
};

