process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

// get a specific slide
// add a slide
// check if slide name exists

describe('/GET slide', () => {
  it('Should get a list of slides.', (done) => {
    chai.request(server)
      .get('/slide')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('content')
        done()
      })
  })
})