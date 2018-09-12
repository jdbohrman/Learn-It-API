module.exports = function (req, res, next) {
  console.log('auth middle ware')
  next()
}