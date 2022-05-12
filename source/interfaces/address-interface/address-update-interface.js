const express = require('express');
const validateFieldsUpdateAddress = require('../../controllers/address-controller/address-update-controller');
const addressUpdate = require('../../infrastructure/repository/address-repository/address-update-repository');
const updateAddressDomain = require('../../domains/address-domain/address-update-domain');
const updateAddressInterface = express.Router();

updateAddressInterface.put('/api/address/:id', async (request, response) => {

  const isFieldsValid = validateFieldsUpdateAddress(request, response);
  console.log(isFieldsValid);
  if (!isFieldsValid) return isFieldsValid;

  const alreadyExists = await updateAddressDomain(request, response);
  console.log(alreadyExists);
  if(alreadyExists != true) return alreadyExists;

  const addressUpdated = await addressUpdate(request, response);
  console.log(addressUpdated);
  return response.status(addressUpdated.statusCode).json(addressUpdated);
});

module.exports = updateAddressInterface;