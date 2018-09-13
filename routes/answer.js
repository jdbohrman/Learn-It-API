let answers = [
  {id:1, answer: 'one'},
  {id:2, answer: 'two'},
  {id:3, answer: 'three'}
]

module.exports = function(express){
  let answerRouter = express.Router()

  answerRouter.get('/', function(req, res) {
    res.json(answers)
  })

  // restrict to authorized
  answerRouter.post('/', function(req, res) {
    // check if answer exists
    let newAnswer = req.body.answer

    let answerIsUnique = answers.find(answer => answer.answer == newAnswer)

    if(answerIsUnique == undefined){
      res
        .status(200)
        .json({
          message: 'Added new answer.',
          success: true
        })
    } else {
      res
        .status(400)
        .json({
          message: 'Answer already exists.',
          success: false
        })
    }
      
  })

  return answerRouter
}