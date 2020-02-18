// For testing api
console.log("app.js loaded");

//Function that calls AJAX, using drop down values as point of origin and destination, then displays ticket price
function flight() {
  let start = $("#start :selected").val();
  let end = $("#end :selected").val();
  $.ajax({
    url: `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?destination=${end}&origin=${start}&currency=USD&page=1`,
    method: "GET",
    headers: {
      "x-rapidapi-host":
        "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
      "x-rapidapi-key": "aa3dd9aaf7msh72e32624a82ff64p19458djsnf620a5c313c0",
      "x-access-token": "67284ded587b515fc873b2264829b953"
    }
  }).then(function(response) {
    //checking what the destination value is and then printing the response price
    switch (end) {
      case "PEK":
        console.log(response.data.BJS[1].price);
        $("#price").text("$" + response.data.BJS[1].price);
        break;
      case "ICN":
        console.log(response.data.SEL[0].price);
        $("#price").text("$" + response.data.SEL[0].price);
        break;
      case "DME":
        console.log(response.data.MOW[0].price);
        $("#price").text("$" + response.data.MOW[0].price);
        break;
    }
    $("#loading").addClass("is-hidden");
    $("#phrases").removeClass("is-hidden");
    $("#avrg").removeClass("is-hidden");
  });
}

$("#add-new").on("click", function(event) {
  console.log("clicked");
  event.preventDefault();
  var newCountry = {
    country: $("#country")
      .val()
      .trim(),
    hello: $("#hello")
      .val()
      .trim(),
    goodbye: $("#goodbye")
      .val()
      .trim(),
    thanks: $("#thank-you")
      .val()
      .trim(),
    excuse: $("#excuse-me")
      .val()
      .trim(),
    may_i: $("#may-I")
      .val()
      .trim(),
    how_much: $("#how-much")
      .val()
      .trim(),
    bathroom: $("#bathroom")
      .val()
      .trim(),
    yes: $("#yes")
      .val()
      .trim(),
    allergic: $("#allergic")
      .val()
      .trim(),
    where: $("#where")
      .val()
      .trim(),
    help: $("#help")
      .val()
      .trim(),
    sorry: $("#sorry")
      .val()
      .trim()
  };
  console.log(newCountry);
  $.post("/api/flights", newCountry).then(function(data) {
    console.log(data);
  });
});

//  Show phrases on click
$("#go").on("click", function() {
  $("#airport").addClass("is-hidden");
  // Shows loading plane buffer on click for two seconds, then runs flight function
  $("#loading").removeClass("is-hidden");
  setTimeout(flight, 2000);
});

// Translate API stuff:
/*
const axios = require("axios");
var countryCode; //This needs to be a letter combo code for country of choice

axios({
    "method":"POST",
    "url":"https://my-translator-pro.p.rapidapi.com/api/translate",
    "headers":{
    "content-type":"application/json",
    "x-rapidapi-host":"my-translator-pro.p.rapidapi.com",
    "x-rapidapi-key":"f0ce25292dmsha2e4b8e0953bbd1p1fed83jsnfd16ad1763cf",
    "targetlanguage":"RU",
    "accept":"application/json"
    },"data":{
    "sourceText":" Hello "
    }
    })
    .then((response)=>{
      console.log(response.data.Translated)
    })
    .catch((error)=>{
      console.log(error)
    })
*/
