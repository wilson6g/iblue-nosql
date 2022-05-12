const { PrismaClient } = require('@prisma/client');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const prisma = new PrismaClient();

const listAllUsers = async (request, response) => {
  try {
    await prisma.$connect()

    const allUsers = await prisma.user.findMany();

    return httpStatusResponse(200, (allUsers), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "Create users repository");
    return finalError;
  }
}

module.exports = listAllUsers;