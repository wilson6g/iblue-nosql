const { PrismaClient } = require('@prisma/client');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const prisma = new PrismaClient();

const addressUpdate = async (request, response) => {
  try {
    const { address, address_status, userId } = request.body;
    const id = request.params.id;

    await prisma.$connect()

    await prisma.address.update({
      where: {
        id: id,
      },
      data: {
        id,
        address,
        address_status,
        userId
      },
    })

    return httpStatusResponse(200, ("Address has been updated!"), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "Update address repository");
    return finalError;
  }
}

module.exports = addressUpdate;