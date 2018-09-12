// give address for help
module.exports = function(req, res, next) {
  res
    .status(404)
    .json({
      message: 'Nothing exists at this route.',
      success: false
    })
}