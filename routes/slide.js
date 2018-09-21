module.exports = function(express){
  let slideRouter = express.Router()

  slideRouter.get('/', function(req, res) {
    res.json([
      {id:1, title: '', content: ''},
      {id:2, title: '', content: ''},
      {id:3, title: '', content: ''}
    ])
  })

  return slideRouter
}