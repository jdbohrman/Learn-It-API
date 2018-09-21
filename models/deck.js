const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Deck', new Schema({
  cards: [String]
}))