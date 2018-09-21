const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Lesson', new Schema({
  title: String,
  content: String
}))