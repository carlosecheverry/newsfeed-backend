const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email().required(),
        picture: Joi.string().required(),
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        biography: Joi.string().required().trim(),
        location: Joi.string().required().trim(),
        }),
    }),
};
