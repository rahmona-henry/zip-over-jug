var agent = require('superagent')
var dotenv = require('dotenv')

dotenv.load()

var url

var getPhoto = function(str, callback){
  var query = [
    'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
    process.env.FLICKR_API_KEY,
    '&tags='+ str + '&per_page=6&format=json&nojsoncallback=1'   /////user input tag
    ].join('')

 agent.get(query, function(err, response, body){
    if (err) {
      console.log("error!", err)
      return
    }

    var object = JSON.parse(response.text)
    object = object.photos.photo[0]

    if(object == undefined){
      getRandomWord()
    }
    else{
      url = 'https://farm'+ object.farm +'.staticflickr.com/'+ object.server +'/' + object.id + '_' + object.secret +'_t.jpg'
      console.log(url, "this is URL")
      return url
    }
  })
}

var getRandomWord = function(callback){
  agent.get('http://randomword.setgetgo.com/get.php', function(err, response, callback){
    if(err){
      console.log(err, "error")
    }
     return getPhoto(response.text)
  })
}

getRandomWord()

function setBackgrounds(){
 var cups = document.querySelectorAll(".cup")
console.log(cups)
for(i = 0; i < cups.length; i++){
  cups[i].style.background = "url('"+url+"')"
}
}


exports = module.export = {
  getRandomWord : getRandomWord,
  getPhoto : getPhoto
}




