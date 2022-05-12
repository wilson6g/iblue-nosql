const Joi = require('joi');

const addressSchema = Joi.object().keys({
  address: Joi.string().required().messages({
    'string.base': `"address" should be a type of 'text'`,
    'string.empty': `"address" cannot be an empty field`,
    'any.required': `"address" is a required field`
  }),
  address_status: Joi.string().required().messages({
    'string.base': `"address_status" should be a type of 'text'`,
    'string.empty': `"address_status" cannot be an empty field`,
    'any.required': `"address_status" is a required field`
  }),
  userId: Joi.string().required().messages({
    'string.base': `"userId" should be a type of 'text'`,
    'string.empty': `"userId" cannot be an empty field`,
    'any.required': `"userId" is a required field`
  })
})

const validateFieldsCreateAddress = (request, response) => {
  const validation = addressSchema.validate(request.body);

  const { error } = validation;
  
  if (error) {
    return response.status(422).json({
      message: error.details[0].message,
      data: {
        message: validation.value,
      }
    })
  }
  return true;
}

module.exports = validateFieldsCreateAddress;