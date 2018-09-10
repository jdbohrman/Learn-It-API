process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

describe('Catch everything else with a 404 route.', () => {
  it('Should 404.', (done) => {
    chai.request(server)
      .get('/nonsense')
      .end((err, res) => {
        res.should.have.status(404)
        res.body.should.be.a('object')
        let body = res.body
        res.body.should.have.property('message')
        body.message.should.equal('Nothing exists at this route.')
        res.body.should.have.property('success')
        body.success.should.equal(false)
        done()
      })
  })
})