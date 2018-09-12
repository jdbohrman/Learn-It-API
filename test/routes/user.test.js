process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

// signin
// update information

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

describe('/Post users/signup', () => {
  it('Should add a new user if they do not exist.', (done) => {
    let newUser = {
      username: 'newGuy',
      password: 'Password!23'
    }
    chai.request(server)
      .post('/user/signup')
      .send(newUser)
      .end((err, res) => {
        let body = res.body
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        body.message.should.equal('Signup Successful.')
        res.body.should.have.property('success')
        body.success.should.equal(true)
        // should contain a jwt
        done()
      })
  })
  
  it('Should not add a new user if they already exist.', (done) => {
    let oldUser = {
      username: 'oldGuy',
      password: 'Password!23'
    }
    chai.request(server)
      .post('/user/signup')
      .send(oldUser)
      .end((err, res) => {
        let body = res.body
        res.should.have.status(500)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        body.message.should.equal('Signup Failed. User already exists.')
        res.body.should.have.property('success')
        body.success.should.equal(false)
        done()
      })
  })
})