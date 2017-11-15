var hostURL = "https://xkcd.com/";
var json_infoURL = "/info.0.json";
var timeline = document.getElementById('timeline_id');

function init(){
  startScrollListener();
  fetchNextComic();
}
init();

function startScrollListener(){

  //detects when user reaches the end
  window.addEventListener("scroll", function(){
  var contentHeight = timeline.offsetHeight;
  var yOffset = window.pageYOffset;
  var y = yOffset + window.innerHeight;
  if(y >= contentHeight)
  {
      //load new content
      fetchNextComic();
  }
  })
}

function fetchNextComic(comicNumber = 1){
  comicNumber +=1;
  json_url = hostURL + comicNumber + json_infoURL;

  $.getJSON( json_url, function( data ) {
      console.log(data);
  })
}
