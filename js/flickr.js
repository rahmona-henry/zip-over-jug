var agent = require('superagent')


function getPhoto(word, callback){
  var query = [
    'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
    'a92f50119a0acc5d49347961a6b0a743',
    '&tags='+ word + '&per_page=6&format=json&nojsoncallback=1'   /////user input tag
  ].join('')

  agent.get(query, function(err, res, body){
    if (err) {
      callback (err)
      return
    }

    var parsedRes = JSON.parse(res.text)
    var photo = parsedRes.photos.photo[0]

    if (!photo) {
      callback(null,  "-1")
      return
    }

    var url ='https://farm'+ photo.farm +'.staticflickr.com/'+ photo.server +'/' + photo.id + '_' + photo.secret +'_t.jpg'
    callback(null, url)
  })
}


function getRandomWord (callback) {
  agent.get('http://randomword.setgetgo.com/get.php', function(err, res) {
    if (err) {
      callback(err)
      return
    }
    callback(null, res.text)
  })
}


function getRandomPhoto(callback){
  getRandomWord( function (err, word) {
    if (err) {
      callback(err)
      return
    }

    getPhoto(word, function (err, photoURL) {
      if (err) {
        callback(err)
        return
      }

      if (photoURL === "-1") {
        getRandomPhoto(callback)
        return
      }
      callback(null, photoURL)
    })
  })
}

module.exports = getRandomPhoto

