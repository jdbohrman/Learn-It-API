const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('slide', new Schema({
  title: String,
  content: String
}))