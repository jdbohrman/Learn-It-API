module.exports = function(express){
  let quizRouter = express.Router()

  quizRouter.get('/', function(req, res) {
    res.json([
      {id:1, title: '', questions: []},
      {id:2, title: '', questions: []},
      {id:3, title: '', questions: []}
    ])
  })

  return quizRouter
}