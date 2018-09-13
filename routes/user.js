const logging = require('../middleWare/logging')

let users = [
  {
    username: 'oldGuy',
    password: 'Password!23'
  }
]

module.exports = function(express){

  let userRouter = express.Router()

  userRouter.use(logging)

  userRouter.post('/signup', function(req, res){
    var username = req.body.username
    var password = req.body.password
    var userExists = users.find(user => user.username == username)
    if(userExists == undefined) {
      res
      .status(200)
      .json({
        message: 'Signup Successful.',
        success: true
      })
    } else {
      res
        .status(400)
        .json({
          message: 'Signup Failed. User already exists.',
          success: false
        })
    }
  })

  // sign in post
  // sign out(just remove token on front end?)
  // update user info

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