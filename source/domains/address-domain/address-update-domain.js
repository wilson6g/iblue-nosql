const findAddressById = require('../../infrastructure/repository/address-repository/address-find-repository');

const updateAddressDomain = async (request, response) => {
  const alreadyExists = await findAddressById(request, response);

  if (alreadyExists.statusCode != 200) return response.status(alreadyExists.statusCode).json(alreadyExists);

  return true;
}

module.exports = updateAddressDomain;