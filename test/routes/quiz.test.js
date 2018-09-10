process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

describe('/GET quiz', () => {
  it('Should get a list of quizes.', (done) => {
    chai.request(server)
      .get('/quiz')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        // array of multiple choice questions
        res.body[0].should.have.property('questions')
        done()
      })
  })
})