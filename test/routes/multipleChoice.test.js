process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

// get a specific multiple choice question
// add a multiple choice question
// check if multiple choice question name exists

describe('/GET multipleChoice', () => {
  it('Should get a list of multiple choice questions.', (done) => {
    chai.request(server)
      .get('/multipleChoice')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('questions') // array
        res.body[0].should.have.property('answers') // array
        res.body[0].should.have.property('explanations') // array
        done()
      })
  })
})