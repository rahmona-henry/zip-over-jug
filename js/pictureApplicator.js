var getRandomPhoto= require('./flickr');

function setBackgrounds(){
  var cups = document.getElementsByClassName("cup")
  var cupsArr = []

  for (var i = 0; i < cups.length; i++) {
    cupsArr.push( cups[i] )
  }

  console.log(cupsArr)

  cupsArr.map( function (oneCup) {
    getRandomPhoto( function (err, data) {
      oneCup.style.backgroundImage = 'url("' + data + '")'
    })
  })
}

setBackgrounds()
