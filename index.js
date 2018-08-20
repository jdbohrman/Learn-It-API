require('dotenv').config()
const port = process.env.port
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/json'}))

app.get('/health', (req, res)=> res.send('Server is running.'))

app.listen(port, () => console.log('Learn It API running on', port))

module.exports = app