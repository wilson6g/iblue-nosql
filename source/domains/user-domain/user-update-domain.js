const findUserById = require('../../infrastructure/repository/user-repository/user-find-repository');

const updateUserDomain = async (request, response) => {
  const alreadyExists = await findUserById(request, response);

  if (alreadyExists.statusCode != 200) return response.status(alreadyExists.statusCode).json(alreadyExists);

  return true;
}

module.exports = updateUserDomain;