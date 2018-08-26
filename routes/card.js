module.exports = function(express){
  let cardRouter = express.Router()

  cardRouter.get('/', function(req, res) {
    res.json([
      {id:1, question: '', answer: '', explain: ''},
      {id:2, question: '', answer: '', explain: ''},
      {id:3, question: '', answer: '', explain: ''}
    ])
  })

  return cardRouter
}