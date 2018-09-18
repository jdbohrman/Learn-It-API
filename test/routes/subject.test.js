process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../..')

let newSubject = {title: 'New Subject', subTitle: 'New SubTitle'}
let oldSubject = {title: 'one', subTitle: '1'}

chai.use(chaiHttp)

// get a subject by ID
// search for subject by title
// search for subject by subtitle

// add a subject
describe('/POST add a subject', () => {
  it('Should add a new subject if it does not exist.', (done) => {
    chai.request(server)
      .post('/subjects')
      .send(newSubject)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.have.property('message')
        res.body.message.should.be.equal('New subject added.')
        res.body.should.have.property('success')
        res.body.success.should.be.equal(true)
        res.body.should.have.property('content')
        res.body.content.should.be.deep.equal(newSubject)
        done()
      })
  })
  it('Should not add an existing subject.', (done) => {
    chai.request(server)
      .post('/subjects')
      .send(oldSubject)
      .end((err, res) => {
        res.should.have.status(400)
        res.body.should.have.property('message')
        res.body.message.should.be.equal('Subject exists.')
        res.body.should.have.property('success')
        res.body.success.should.be.equal(false)
        done()
      })
  })
})

// get subjects or subject
describe('/GET subject', () => {

  it('Should get a list of subjects.', (done) => {
    chai.request(server)
      .get('/subjects')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('title')
        res.body[0].should.have.property('subTitle')
        done()
      })
  })

  it('Should get a subject by Id', (done) => {
    chai.request(server)
      .get('/subjects/1')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.message.should.equal('Found subject.')
        res.body.should.have.property('success')
        res.body.success.should.equal(true)
        res.body.should.have.property('content')
        res.body.content.should.be.a('object')
        res.body.content.should.have.property('title')
        res.body.content.should.have.property('subTitle')
        done()
      })
  })

  it('Should not find a subject for an Id that does not exist.', (done) => {
    chai.request(server)
      .get('/subjects/q')
      .end((err, res) => {
        res.should.have.status(400)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.should.have.property('success')
        res.body.message.should.equal('Subject with that ID not found.')
        res.body.success.should.equal(false)
        done()
      })
  })
})