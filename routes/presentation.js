module.exports = function(express){
  let presentationRouter = express.Router()

  presentationRouter.get('/', function(req, res) {
    res.json([
      {id:1, slides: ''},
      {id:2, slides: ''},
      {id:3, slides: ''}
    ])
  })

  return presentationRouter
}