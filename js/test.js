var test = require('tape')
var fs = require("fs")


var flickr = require('./flickr.js')

console.log(flickr)

test('get photo', function (t){
  fs.writeFile('./testword.json', flickr.getRandomWord, function (err){
    if(err){
      console.log("ya goofed!")
      return
    }
  })
  t.end()
})
