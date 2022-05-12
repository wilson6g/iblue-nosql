const express = require('express');
const validateFieldsCreateUser = require('../../controllers/user-controller/user-create-controller');
const userCreate = require('../../infrastructure/repository/user-repository/user-registration-repository');
const createUserInterface = express.Router();

createUserInterface.post('/api/user', async (request, response) => {
  const isFieldsValid = validateFieldsCreateUser(request, response);
  if(isFieldsValid != true) return response.status(400).send();

  const userCreated = await userCreate(request, response);
  
  return response.status(userCreated.statusCode).json(userCreated).send();
});

module.exports = createUserInterface;