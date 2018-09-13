process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

describe('/GET answers', () => {
  it('Should get a list of answers.', (done) => {
    chai.request(server)
      .get('/answer')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('answer')
        done()
      })
  })
})

let newAnswer = {
  answer: 'A new answer.'
}
let oldAnswer = {
  answer: 'three'
}

describe('/POST answer', () => {
  it('Should add a new answer.', (done) => {
    chai.request(server)
      .post('/answer')
      .send(newAnswer)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.should.have.property('success')
        res.body.message.should.equal('Added new answer.')
        res.body.success.should.equal(true)
        done()
      })
  })

  it('Should not add a new answer if it already exists.', (done) => {
    chai.request(server)
      .post('/answer')
      .send(oldAnswer)
      .end((err, res) => {
        res.should.have.status(400)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.should.have.property('success')
        res.body.message.should.equal('Answer already exists.')
        res.body.success.should.equal(false)
        done()
      })
  })
})