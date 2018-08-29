module.exports = function(express){
  let multipleChoiceRouter = express.Router()

  multipleChoiceRouter.get('/', function(req, res) {
    res.json([
      {id:1, questions: [], answers: [], explanations: []},
      {id:2, questions: [], answers: [], explanations: []},
      {id:3, questions: [], answers: [], explanations: []}
    ])
  })

  return multipleChoiceRouter
}