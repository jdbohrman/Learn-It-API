module.exports = function(express){
  let slideRouter = express.Router()

  slideRouter.get('/', function(req, res) {
    res.json([
      {id:1, content: ''},
      {id:2, content: ''},
      {id:3, content: ''}
    ])
  })

  return slideRouter
}