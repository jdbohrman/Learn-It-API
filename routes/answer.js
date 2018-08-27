module.exports = function(express){
  let answerRouter = express.Router()

  answerRouter.get('/', function(req, res) {
    res.json([
      {id:1, answer: ''},
      {id:2, answer: ''},
      {id:3, answer: ''}
    ])
  })

  return answerRouter
}