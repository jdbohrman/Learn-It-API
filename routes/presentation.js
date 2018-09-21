module.exports = function(express){
  let presentationRouter = express.Router()

  presentationRouter.get('/', function(req, res) {
    res.json([
      {id:1, title: '', slides: ''},
      {id:2, title: '', slides: ''},
      {id:3, title: '', slides: ''}
    ])
  })

  return presentationRouter
}