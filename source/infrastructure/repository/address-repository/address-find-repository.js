const { PrismaClient } = require('@prisma/client');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const prisma = new PrismaClient();

const listAllAddresses = async (request, response) => {
  try {
    const id = request.params.id;

    await prisma.$connect()

    const allAddresses = await prisma.address.findFirst(id);

    return httpStatusResponse(200, (allAddresses), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "Create address repository");
    return finalError;
  }
}

module.exports = listAllAddresses;