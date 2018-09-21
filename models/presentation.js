const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Presentation', new Schema({
  title: String,
  slides: [String]
}))