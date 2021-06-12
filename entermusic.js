function sendmessage() {

var link = document.getElementById('link').value

localStorage.setItem("link",link)

window.location.href = "music.html"
}