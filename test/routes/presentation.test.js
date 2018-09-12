process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

// get a specific presentation
// add a presentation
// check if presentation name exists

describe('/GET presentation', () => {
  it('Should get a list of presentations.', (done) => {
    chai.request(server)
      .get('/presentation')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('slides')
        done()
      })
  })
})