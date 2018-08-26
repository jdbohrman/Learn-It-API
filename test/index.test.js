process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../index')

chai.use(chaiHttp)

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

describe('/GET users', () => {
  it('Should get a list of users.', (done) => {
    chai.request(server)
      .get('/user')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('username')
        done()
      })
  })
})

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

describe('/GET subjects', () => {
  it('Should get a list of subjects.', (done) => {
    chai.request(server)
      .get('/subjects')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0);
        res.body[0].should.have.property('title')
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('subTitle')
        done()
      })
  })
})

describe('/GET health', () => {
  it('Should GET health response.', (done) => {
    chai.request(server)
      .get('/health')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.text.should.be.a('string')
        res.text.should.be.eql('Server is running.')
        done()
      })
  })
})