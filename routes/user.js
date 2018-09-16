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
  userRouter.post('/signin', function(req, res){
    var username = req.body.username
    var password = req.body.password
    var credentialsCorrect = users.find(user => user.username == username && user.password == password)
    if(credentialsCorrect == undefined){
      res
        .status(401)
        .json({
          message: 'Username or password was incorrect.',
          success: false
        })
    } else {
      res
        .status(200)
        .json({
          message: 'User logged in.',
          success: true
          // include jwt?
        })
    }
  })

  // sign out(just remove token on front end?)
  
  // restrict to authorized user
  // update user info
  userRouter.put('/:id', function(req, res) {
    let id = req.params.id
    console.log('id', id)
    console.log('body', req.body)
    let newUserInfo = { username: req.body.username, password: req.body.password }
    console.log('new info', newUserInfo)
    let foundUser = users.find(user => user.username == newUserInfo.username)
    console.log('found', foundUser)
    if(foundUser == undefined){
      console.log('no find')
      res
        .status(400)
        .json({
          message: 'User not found.',
          success: false
        })
    } else {
      // update user info
      console.log('find')
      res
        .status(200)
        .json({
          message: 'Updated user info.',
          success: true
          // include names of fields updated?
        })
    }
  })

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