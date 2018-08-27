module.exports = function(express){
  let deckRouter = express.Router()

  deckRouter.get('/', function(req, res) {
    res.json([
      {id:1, cards: []},
      {id:2, cards: []},
      {id:3, cards: []}
    ])
  })

  return deckRouter
}