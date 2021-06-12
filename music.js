
var theme = "?theme=0"

var embedlink = "https://open.spotify.com/embed/"
  var musicsource1 = localStorage.getItem("link");

console.log(musicsource1)



  var musictype = musicsource1.substring(25, musicsource1.length-22);
console.log(musictype)
  if (musictype == "album/"){

      var musicsource = musicsource1.substring(musicsource1.length, 31);
  }

  if (musictype == "playlist/"){

    var musicsource = musicsource1.substring(musicsource1.length, 34);
  }
console.log(musictype)
  console.log(musictype)
    console.log(musicsource)
    console.log(embedlink+musictype+musicsource+theme)
  document.getElementById("music").src = embedlink+musictype+musicsource+theme


//22

// <input style="color: #FFFFFF;" type="text" id="message" size="100"/>
// AIzaSyDFs_BOYSsrNI-0M8y5WMLswabGArme9sY