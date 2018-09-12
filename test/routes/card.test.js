process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

// get specific card
// add a card
// check if card exists

describe('/GET cards', () => {
  it('Should get a list of cards.', (done) => {
    chai.request(server)
      .get('/card')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('question')
        res.body[0].should.have.property('answer')
        res.body[0].should.have.property('explain')
        done()
      })
  })
})