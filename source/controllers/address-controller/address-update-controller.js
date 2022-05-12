const Joi = require('joi');

const addressSchema = Joi.object().keys({
  address: Joi.string().alphanum().min(3).max(30).messages({
    'string.base': `"address" should be a type of 'text'`,
    'string.empty': `"address" cannot be an empty field`,
    'string.min': `"address" should have a minimum length of {#limit}`,
  }),
  address_status: Joi.string().alphanum().min(5).max(30).messages({
    'string.base': `"address_status" should be a type of 'text'`,
    'string.empty': `"address_status" cannot be an empty field`,
    'string.min': `"address_status" should have a minimum length of {#limit}`,
  }),
  userId: Joi.string().messages({
    'string.base': `"userId" should be a type of 'text'`,
    'string.empty': `"userId" cannot be an empty field`,
    'string.min': `"userId" should have a minimum length of {#limit}`
  })
})

const validateFieldsUpdateAddress = (request, response) => {
  const validation = addressSchema.validate(request.body);

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

module.exports = validateFieldsUpdateAddress;