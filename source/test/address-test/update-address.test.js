var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Test ADDRESS API', () => {
  it('should update an address', (done) => {

    let address = {
      address: "12312321",
      address_status: "321312313123",
      userId: "627c5935401543046b324c97"
    }

    chai.request('localhost:' + process.env.NODE_PORT)
      .put('/api/address/627c5935401543046b324c98')
      .type('json')
      .send(address)
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


