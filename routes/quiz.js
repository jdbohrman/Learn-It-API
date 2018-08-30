module.exports = function(express){
  let quizRouter = express.Router()

  quizRouter.get('/', function(req, res) {
    res.json([
      {id:1, questions: []},
      {id:2, questions: []},
      {id:3, questions: []}
    ])
  })

  return quizRouter
}