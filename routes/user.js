module.exports = function(express){
  let userRouter = express.Router()

  userRouter.get('/', function(req, res) {
    res.json([
      {id:1, username: 'a@b.com'},
      {id:2, username: 'b@c.com'},
      {id:3, username: 'c@d.com'},
      {id:4, username: 'd@e.com'},
    ])
  })

  return userRouter
}