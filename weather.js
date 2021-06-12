/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
var i = 0;

const apiKey = "4d8fb5b93d4af21d66a2948710284366";

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;

  //check if there's already a city
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(el => {
      let content = "";
      //athens,gr
      if (inputVal.includes(",")) {
        //athens,grrrrrr->invalid country code, so we keep only the first part of inputVal
        if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        //athens
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
      } ...otherwise be more specific by providing the country code as well 😉`;
      form.reset();
      input.focus();
      return;
    }
  }

  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">

          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <h2 style="position:absolute;right:100px;margin-top:-30px;"class="city-name" id="UV"></h2>
        <div id="temp" class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <div id="Index" style="position:absolute;right:175px;margin-top:-105px;" class="city-temp"></div>
          <h2 style="position:absolute;right:115px;font-size:25px;margin-top:25px;"class="city-name" id="spf">Sunscreen SPF</h2>
          <div id="spfnum" style="position:absolute;right:120px;margin-top:65px;" class="city-temp"></div>
          <h2 style="position:absolute;left:50px;top:425px;"class="city-name" id="suggestion"></h2>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption id="weather">${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city 😩";
    });

  msg.textContent = "";
  form.reset();
  input.focus();

});


function clicked1() {


}

function clicked() {
 

  i++

if (i >1){

  window.location.reload()
}
var test = document.getElementById("temp").innerHTML;


var res = test.substring(0, 2)
console.log(res)
 

 parseInt(res);

 if (res >= 28){

  document.getElementById("UV").innerHTML = "UV Index: Very High"
    document.getElementById("Index").innerHTML = "10"
  document.getElementById("spfnum").innerHTML = "50+"
 }

 if (res >= 23 && res < 28){
 document.getElementById("UV").innerHTML = "UV Index: Very High"
   document.getElementById("Index").innerHTML = "9"
document.getElementById("spfnum").innerHTML = "50+"
 }

  if (res >= 18 && res < 23){
 document.getElementById("UV").innerHTML = "UV Index: Very High"
   document.getElementById("Index").innerHTML = "8"
   document.getElementById("spfnum").innerHTML = "50+"
 }

   if (res >= 15 && res < 18){
 document.getElementById("UV").innerHTML = "UV Index: Moderate"
   document.getElementById("Index").innerHTML = "7"
   document.getElementById("spfnum").innerHTML = "50+"
 }

   if (res >= 12 && res < 15){
 document.getElementById("UV").innerHTML = "UV Index: Moderate"
    document.getElementById("Index").innerHTML = "6"
    document.getElementById("spfnum").innerHTML = "50+"

 }


   if (res >= 10 && res < 12){
 document.getElementById("UV").innerHTML = "UV Index: Moderate"
   document.getElementById("Index").innerHTML = "5"
   document.getElementById("spfnum").innerHTML = "30+"
 }

  if (res >= 7 && res < 10){
 document.getElementById("UV").innerHTML = "UV Index: Moderate"
   document.getElementById("Index").innerHTML = "5"
   document.getElementById("spfnum").innerHTML = "30+"
 }

   if (res >= 4 && res < 7){
 document.getElementById("UV").innerHTML = "UV Index: Low"
   document.getElementById("Index").innerHTML = "4"
   document.getElementById("spfnum").innerHTML = "15+"
 }

  if (res >= 2 && res < 4){
 document.getElementById("UV").innerHTML = "UV Index: Low"
  document.getElementById("Index").innerHTML = "3"
  document.getElementById("spfnum").innerHTML = "15+"
 }

  if (res >= 0 && res < 2){
 document.getElementById("UV").innerHTML = "UV Index: Low"
  document.getElementById("Index").innerHTML = "2"
  document.getElementById("spfnum").innerHTML = "5+"
 }

  if (res < 0){
 document.getElementById("UV").innerHTML = "UV Index: Low"
  document.getElementById("Index").innerHTML = "1"
  document.getElementById("spfnum").innerHTML = "5+"
 }

 var weather = document.getElementById("weather").innerHTML;

 console.log(weather)

 if (weather.indexOf('rain')> -1 || res < 20) {
document.getElementById("suggestion").innerHTML = 'You should not go to the beach today';

 }else{

  document.getElementById("suggestion").innerHTML = 'You should go to the beach today!';
 }





}
 var weatherwidget = document.getElementById('weatherwidget');
 var inputform = document.getElementById('form')
function move() {

  weatherwidget.style.left = "53%"

   weatherwidget.style.top = "750px"
   inputform.style.top = '25px'
     inputform.style.left = "100px"
}