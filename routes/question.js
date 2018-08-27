module.exports = function(express){
  let questionRouter = express.Router()

  questionRouter.get('/', function(req, res) {
    res.json([
      {id:1, question: ''},
      {id:2, question: ''},
      {id:3, question: ''}
    ])
  })

  return questionRouter
}