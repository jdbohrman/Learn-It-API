process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

// get a specific deck
// add a deck
// check if deck name exists

describe('/GET decks', () => {
  it('Should get a list of decks.', (done) => {
    chai.request(server)
      .get('/deck')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('cards')
        done()
      })
  })
})