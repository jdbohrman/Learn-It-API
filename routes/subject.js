const Subject = require('../models/subject')

let subjects = [
  {id: 1, title: 'one', subTitle: '1'},
  {id: 2, title: 'two', subTitle: '2'},
  {id: 3, title: 'three', subTitle: '3'}
]

module.exports = function(express){
  let subjectRouter = express.Router()

  subjectRouter.get('/', function(req, res) {
    Subject.find({}, (err, subjects) => {
      res
        .status(200)
        .json(subjects)
    })
  })

  // restrict to authorized users
  subjectRouter.get('/:id', function(req, res) {
    let id = req.params.id
    let foundSubject = subjects.find(subject => subject.id == id)
    if(foundSubject === undefined){
      res
        .status(400)
        .json({
          message: 'Subject with that ID not found.',
          success: false
        })
    } else {
      res
        .status(200)
        .json({
          message: 'Found subject.',
          success: true,
          content: foundSubject
        })
    }
  })

  subjectRouter.post('/', function(req, res) {
    let newSubject = {
      title: req.body.title,
      subTitle: req.body.subTitle
    }
    Subject.findOne({title: newSubject.title}, (err, subject) => {
      if(!subject){
        let subjectToAdd = new Subject(newSubject)
        subjectToAdd.save((err, subject)=> {
          if(err){
            res
              .status(400)
              .json({
                message: 'Error adding new subject.',
                success: false,
                content: err
              })
          } else {
            res
              .status(200)  
              .json({
                message: 'New subject added.',
                success: true,
                content: subject
              })
          }
        })
      } else {
        res
          .status(400)
          .json({
            message: 'Subject exists.',
            success: false,
            content: subject
          })
      }
    })
  })
  return subjectRouter
}