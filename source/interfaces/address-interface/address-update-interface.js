const express = require('express');
const validateFieldsUpdateAddress = require('../../controllers/address-controller/address-update-controller');
const addressUpdate = require('../../infrastructure/repository/address-repository/address-update-repository');
const updateAddressDomain = require('../../domains/address-domain/address-update-domain');
const updateAddressInterface = express.Router();

updateAddressInterface.put('/api/address/:id', async (request, response) => {

  const isFieldsValid = validateFieldsUpdateAddress(request, response);

  if (isFieldsValid != true) return response.status(400).send();

  const alreadyExists = await updateAddressDomain(request, response);

  if(alreadyExists != true) return response.status(400).send();

  const addressUpdated = await addressUpdate(request, response);

  return response.status(addressUpdated.statusCode).json(addressUpdated).send();
});

module.exports = updateAddressInterface;