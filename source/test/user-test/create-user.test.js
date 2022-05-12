var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Test USER API', () => {
  it('should create a new user', (done) => {

    let user = {
      name: "Gilberto",
      birthDate: "1974-04-01"
    }

    chai.request('localhost:' + process.env.NODE_PORT)
      .post('/api/user')
      .type('json')
      .send(user)
      .end((error, response) => {
        if (error) {
          done(error);
        }
        chai.expect(error).to.be.null;
        chai.expect(response).to.have.status(201);

        done();
      })
  });
});


