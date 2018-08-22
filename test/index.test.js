process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../index')

chai.use(chaiHttp)

describe('Junk Test', () => {
  it('True should be true.', () => {
    expect(true).to.be.true
  })
})

describe('/GET subjects', () => {
  it('Should get a list of subjects.', (done) => {
    chai.request(server)
      .get('/subjects')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0);
        res.body[0].should.have.property('title')
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('subTitle')
        done()
      })
  })
})

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