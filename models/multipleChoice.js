const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('MultipleChoice', new Schema({
  questions: [String],
  answers: [String],
  explanations: [String]
}))