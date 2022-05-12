var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Test USER API', () => {
  it('should update an user', (done) => {

    let user = {
      name: "Gilberto de Souza Leite",
      birthDate: "1974-04-01"
    }

    chai.request('localhost:' + process.env.NODE_PORT)
      .put('/api/user/627c6cd6113e84ea0ce8854f')
      .type('json')
      .send(user)
      .end((error, response) => {
        if (error) {
          done(error);
        }
        chai.expect(error).to.be.null;
        chai.expect(response).to.have.status(200);

        done();
      })
  });
});


