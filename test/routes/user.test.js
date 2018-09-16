process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

chai.use(chaiHttp)

let newUser = {
  username: 'newGuy',
  password: 'Password!23'
}
let oldUser = {
  username: 'oldGuy',
  password: 'Password!23'
}
let oldUserUpdate = {
  username: 'oldGuy',
  password: 'NewPassword!!!'
}

// update information
describe('/PUT users/:id', () => {
  it('Should update a user.', (done) => {
    chai.request(server)
      .put('/user/1')
      .send(oldUserUpdate)
      .end((err, res) => {
        res.should.have.status(200)
        console.log('body', res.body)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.should.have.property('success')
        res.body.message.should.equal('Updated user info.')
        res.body.success.should.equal(true)
        // return updated object?
        done()
      })
  })
  it('Should return an error if user is not found.', (done) => {
    chai.request(server)
      .put('/user/2')
      .send({username: 'someOtherGuy', password: 'asdfasdf'})
      .end((err, res) => {
        res.should.have.status(400)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.should.have.property('success')
        res.body.message.should.equal('User not found.')
        res.body.success.should.equal(false)
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

describe('/POST users/signin', () => {

  it('Should log in an existing user.', (done) => {
    chai.request(server)
      .post('/user/signin')
      .send(oldUser)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.should.have.property('success')
        let body = res.body
        body.message.should.equal('User logged in.')
        body.success.should.equal(true)
        // check for jwt
        done()
      })
  })
  it('Should not log in a user with the wrong credentials', (done) => {
    chai.request(server)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(401)
        res.body.should.be.a('object')
        let body = res.body
        body.should.have.property('message')
        body.should.have.property('success')
        body.message.should.equal('Username or password was incorrect.')
        body.success.should.equal(false)
        done()
      })
  })
})

describe('/Post users/signup', () => {
  it('Should add a new user if they do not exist.', (done) => {
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
        res.should.have.status(400)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        body.message.should.equal('Signup Failed. User already exists.')
        res.body.should.have.property('success')
        body.success.should.equal(false)
        done()
      })
  })
})