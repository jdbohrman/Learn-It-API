require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/json'}))

const subjectRoute = require('./routes/subject')(express)
const userRoute = require('./routes/user')(express)
const lessonRoute = require('./routes/lesson')(express)
const cardRoute = require('./routes/card')(express)
const deckRoute = require('./routes/deck')(express)
const questionRoute = require('./routes/question')(express)
const answerRoute = require('./routes/answer')(express)
const explanationRoute = require('./routes/explanation')(express)
const multipleChoiceRoute = require('./routes/multipleChoice')(express)
const quizRoute = require('./routes/quiz')(express)

app.use('/subjects', subjectRoute)
app.use('/user', userRoute)
app.use('/lesson', lessonRoute)
app.use('/card', cardRoute)
app.use('/deck', deckRoute)
app.use('/question', questionRoute)
app.use('/answer', answerRoute)
app.use('/explanation', explanationRoute)
app.use('/multipleChoice', multipleChoiceRoute)
app.use('/quiz', quizRoute)

app.get('/health', (req, res)=> res.send('Server is running.'))

app.listen(port, () => console.log('Learn It API running on', port))

if(process.env.NODE_ENV){
  module.exports = app
}