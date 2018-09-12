process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

// get a specific question
// add a question
// check if question name exists

describe('/GET questions', () => {
  it('Should get a list of questions.', (done) => {
    chai.request(server)
      .get('/question')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('question')
        done()
      })
  })
})