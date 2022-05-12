var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Test USER API', () => {
  it('should return all users', (done) => {

    chai.request('localhost:' + process.env.NODE_PORT)
      .get('/api/user')
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


