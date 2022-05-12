const { PrismaClient } = require('@prisma/client');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const prisma = new PrismaClient();

const listAllAddresses = async (request, response) => {
  try {
    await prisma.$connect()

    const allAddresses = await prisma.address.findMany();

    return httpStatusResponse(200, (allAddresses), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "Create address repository");
    return finalError;
  }
}

module.exports = listAllAddresses;