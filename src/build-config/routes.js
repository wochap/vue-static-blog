var fs = require('fs')
var path = require('path')

// get all post markdown files
var postsFiles = fs.readdirSync(path.resolve(__dirname, '../posts/en'))

// get all
var postsPaths = postsFiles.map(function (path) {
  // extract file name from path file
  var fileName = (path.split('/').pop().split('.'))[0]

  return '/posts/' + fileName
})

// exports routes that static-site-generator-webpack-plugin will use to compile
module.exports = [
  '/',
  '/404'
].concat(postsPaths)
