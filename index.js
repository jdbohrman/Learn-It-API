require('dotenv').config()
const port = process.env.port
const express = require('express')
const app = express()

app.get('/health', (req, res)=> res.send('Server is running.'))

app.listen(port, () => console.log('Learn It API running on', port))