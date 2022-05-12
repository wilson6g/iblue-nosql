const { PrismaClient } = require('@prisma/client');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const prisma = new PrismaClient();

const createAddress = async (request, response) => {
  try {
    const { address, address_status, userId } = request.body;

    await prisma.$connect()

    await prisma.address.create({
      data: {
        address,
        address_status,
        userId
      },
    })

    return httpStatusResponse(201, ("Address has been created!"), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "Create address repository");
    return finalError;
  }
}

module.exports = createAddress;