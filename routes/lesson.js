module.exports = function(express){
  let lessonRouter = express.Router()

  lessonRouter.get('/', function(req, res) {
    res.json([
      {id:1, title: 'Intro', content: ''},
      {id:2, title: 'Meetings And Greetings.', content: ''},
      {id:3, title: 'See you later.', content: ''},
      {id:4, title: 'Morning.', content: ''}
    ])
  })

  return lessonRouter
}