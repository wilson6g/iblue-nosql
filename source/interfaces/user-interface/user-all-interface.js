const express = require('express');
const listAllUsers = require('../../infrastructure/repository/user-repository/user-all-repository');
const allUserInterface = express.Router();

allUserInterface.get('/api/user', async (request, response) => {
  const userCreated = await listAllUsers(request, response);
  
  return response.status(userCreated.statusCode).json(userCreated).send();
});

module.exports = allUserInterface;