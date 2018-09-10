process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

describe('/GET lesson', () => {
  it('Should get a list of lessons.', (done) => {
    chai.request(server)
      .get('/lesson')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('title')
        res.body[0].should.have.property('content')
        done()
      })
  })
})