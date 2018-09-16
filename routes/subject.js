let subjects = [
  {id: 1, title: 'one', subTitle: '1'},
  {id: 2, title: 'two', subTitle: '2'},
  {id: 3, title: 'three', subTitle: '3'}
]

module.exports = function(express){
  let subjectRouter = express.Router()

  subjectRouter.get('/', function(req, res) {
    res.json(subjects)
  })

  // restrict to authorized users

  subjectRouter.post('/', function(req, res) {
    let newSubject = {
      title: req.body.title,
      subTitle: req.body.subTitle
    }
    console.log(newSubject)
    // search for exsiting subject.
    let subjectExists = subjects.find(subject => subject.title === newSubject.title || subject.subTitle === newSubject.subTitle)
    console.log(subjectExists)
    if(subjectExists === undefined){
      // add new
      subjects.push(newSubject)
      res
        .status(200)
        .json({
          message: 'New subject added.',
          success: true,
          content: newSubject
        })
    } else {
      // return error
    }
  })
  return subjectRouter
}