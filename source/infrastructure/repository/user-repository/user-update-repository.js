const { PrismaClient } = require('@prisma/client');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const prisma = new PrismaClient();

const userUpdate = async (request, response) => {
  try {
    const { name, birthDate } = request.body;
    const id = request.params.id;

    await prisma.$connect()

    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        birthDate
      },
    })

    return httpStatusResponse(200, ("User has been updated!"), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "Update user repository");
    return finalError;
  }
}

module.exports = userUpdate;