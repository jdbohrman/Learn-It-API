process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

describe('/GET health', () => {
  it('Should GET health response.', (done) => {
    chai.request(server)
      .get('/health')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.text.should.be.a('string')
        res.text.should.be.eql('Server is running.')
        done()
      })
  })
})