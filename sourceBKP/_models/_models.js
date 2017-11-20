const read = require('fs-readdir-recursive')

  // PARSE ALL FUNCTIONALITY SPECIFIATIONS
let models = read(__dirname+'/source/models').filter((file) => {
  console.log(file)
  if ((/(roles|parts)\/.*\.js$/).test(file)) {
    return true
  }
})
let models = read('/Users/timo/Documents/Next UX Local/NextUIGeneratorSpecifications/source/functionality/Evenementen/models').filter((file) => {
  console.log(file)
//
// const fs = require('fs')
//
// var normalizedPath = require('path').join(__dirname, 'models')
// fs.readdirSync(normalizedPath).forEach(function(file) {
//   require('./routes/' + file)
// })
// module.exports = {
//
// }
