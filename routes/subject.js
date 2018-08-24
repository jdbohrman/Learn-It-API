module.exports = function(express){
  let subjectRouter = express.Router()

  subjectRouter.get('/', function(req, res) {
    res.json([
      {id: 1, title: 'one', subTitle: '1'},
      {id: 2, title: 'two', subTitle: '2'},
      {id: 3, title: 'three', subTitle: '3'}
    ])
  })

  return subjectRouter
}