var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Test ADDRESS API', () => {
  it('should create a new address', (done) => {

    let address = {
      address: "Av. Paralela",
      address_status: "Faculdade",
      userId: "627c594b299bf0100e3aae1f"
    }

    chai.request('localhost:' + process.env.NODE_PORT)
      .post('/api/address')
      .type('json')
      .send(address)
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


