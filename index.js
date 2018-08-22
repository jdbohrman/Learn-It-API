require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/json'}))

const subjects = require('./routes/subjects')(express)
app.use('/subjects', subjects)

app.get('/health', (req, res)=> res.send('Server is running.'))

app.listen(port, () => console.log('Learn It API running on', port))

if(process.env.NODE_ENV){
  module.exports = app
}