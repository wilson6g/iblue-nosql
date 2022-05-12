const { PrismaClient } = require('@prisma/client');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const prisma = new PrismaClient();

const createUser = async (request, response) => {
  try {
    const { name, birthDate } = request.body;

    await prisma.$connect()

    await prisma.user.create({
      data: {
        name,
        birthDate,
      },
    })

    return httpStatusResponse(201, ("User has been created!"), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "Create user repository");
    return finalError;
  }
}

module.exports = createUser;