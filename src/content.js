document.documentElement.addEventListener("keyup", function(e) {
  e.preventDefault()
  if (e.code == "Space") {
    var video = document.getElementsByTagName('video')[0]
    if (video.paused) {
      video.play(); 
    }
    else { 
      video.pause(); 
    } 
  }
});