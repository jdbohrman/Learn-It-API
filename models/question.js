const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Question', new Schema({
  question: String
}))