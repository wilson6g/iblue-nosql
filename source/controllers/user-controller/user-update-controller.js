const Joi = require('joi');

const updateUserSchema = Joi.object().keys({
  name: Joi.string().min(5).max(30).required().messages({
    'string.base': `"name" should be a type of 'text'`,
    'string.empty': `"name" cannot be an empty field`,
    'string.min': `"name" should have a minimum length of {#limit}`,
    'any.required': `"name" is a required field`
  }), 
  birthDate: Joi.date().required().messages({
    'string.base': `"birthDate" should be a type of 'text'`,
    'string.empty': `"birthDate" cannot be an empty field`,
    'string.min': `"birthDate" should have a minimum length of {#limit}`,
    'any.required': `"birthDate" is a required field`
  }),
})

const validateFieldsUpdateUser = (request, response) => {
  const validation = updateUserSchema.validate(request.body);

  const { error } = validation;
  if (error) {
    response.status(422).json({
      message: error.details[0].message,
      data: {
        message: validation.value,
      }
    })
  }
  return true;
}

module.exports = validateFieldsUpdateUser;