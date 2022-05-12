const express = require('express');
const listAllAddresses = require('../../infrastructure/repository/address-repository/address-all-repository');
const allAddressInterface = express.Router();

allAddressInterface.get('/api/address', async (request, response) => {
  const allAddresses = await listAllAddresses(request, response);
  
  return response.status(allAddresses.statusCode).json(allAddresses).send();
});

module.exports = allAddressInterface;