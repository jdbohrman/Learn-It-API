module.exports = function(express){
  let explanationRouter = express.Router()

  explanationRouter.get('/', function(req, res) {
    res.json([
      {id:1, explanation: ''},
      {id:2, explanation: ''},
      {id:3, explanation: ''}
    ])
  })

  return explanationRouter
}