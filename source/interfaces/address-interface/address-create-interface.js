const express = require('express');
const createAddressInterface = express.Router();
const validateFieldsCreateAddress = require('../../controllers/address-controller/address-create-controller');
const createAddress = require('../../infrastructure/repository/address-repository/address-registration-repository');

createAddressInterface.post('/api/address', async (request, response) => {
  const isFieldsValid = validateFieldsCreateAddress(request, response);

  if(isFieldsValid != true) return response.status(400).send();

  const addressCreated = await createAddress(request, response);

  return response.status(addressCreated.statusCode).json(addressCreated).send();
})


module.exports = createAddressInterface;