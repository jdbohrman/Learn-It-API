const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Card', new Schema({
  question: String,
  answer: String,
  explain: String
}))