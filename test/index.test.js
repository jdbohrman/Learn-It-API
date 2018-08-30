process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../index')

chai.use(chaiHttp)

describe('/GET presentation', () => {
  it('Should get a list of presentations.', (done) => {
    chai.request(server)
      .get('/presentation')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('slides')
        done()
      })
  })
})

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

describe('/GET quiz', () => {
  it('Should get a list of quizes.', (done) => {
    chai.request(server)
      .get('/quiz')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        // array of multiple choice questions
        res.body[0].should.have.property('questions')
        done()
      })
  })
})

describe('/GET multipleChoice', () => {
  it('Should get a list of multiple choice questions.', (done) => {
    chai.request(server)
      .get('/multipleChoice')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('questions') // array
        res.body[0].should.have.property('answers') // array
        res.body[0].should.have.property('explanations') // array
        done()
      })
  })
})

describe('/GET explanations', () => {
  it('Should get a list of explanations.', (done) => {
    chai.request(server)
      .get('/explanation')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('explanation')
        done()
      })
  })
})

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

describe('/GET questions', () => {
  it('Should get a list of questions.', (done) => {
    chai.request(server)
      .get('/question')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.above(0)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('question')
        done()
      })
  })
})

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