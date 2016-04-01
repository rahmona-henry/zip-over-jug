var agent = require('superagent')
var dotenv = require('dotenv')


dotenv.load()




var url

var getPhoto = function(str, callback){
console.log(str, "this is str")
var query = [
  'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
  process.env.FLICKR_API_KEY,
  '&tags='+ str + '&per_page=6&format=json&nojsoncallback=1'   /////user input tag
].join('')

  agent.get(query, function(err, response, body){
    if (err) {console.log("error!", err)
      return}

    var object = JSON.parse(response.text)
    console.log(object)
    object = object.photos.photo[0]

    console.log(url)
    if(object == undefined){
      getRandomWord()
    }
    else{
    url = 'https://farm'+ object.farm +'.staticflickr.com/'+ object.server +'/' + object.id + '_' + object.secret +'.jpg'
    console.log(url)
    return url
  }
  })
}

var getRandomWord = function(callback){
  agent.get('http://randomword.setgetgo.com/get.php', function(err, response, callback){
    if(err){
      console.log(err, "error")
    }
    getPhoto(response.text)
  })
}

getRandomWord()

exports = module.export = {
  getRandomWord : getRandomWord,
  getPhoto : getPhoto
}

// var rando = getRandomWord()
// console.log(rando)
// var query = [
//   'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
//   process.env.FLICKR_API_KEY,
//   '&tags='+ rando + '&per_page=6&format=json&nojsoncallback=1'   /////user input tag
// ].join('')
// getPhoto()


