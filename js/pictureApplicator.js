var cups = document.querySelectorAll("div.cup")
console.log(cups)
for(i = 0; i < cups.length; i++){
  cups[i].style.background = "url('https://farm1.staticflickr.com/20/71287943_803b42beb6_t.jpg')"
}
var getRandomWord= require('./flickr');

function setBackgrounds(){
  for(var i=0; i<9; i++){
    var img=getRandomWord();
    document.querySelectorAll("#cup"+i).
  }
}
