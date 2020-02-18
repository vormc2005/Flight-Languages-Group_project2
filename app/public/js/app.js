// For testing api
console.log('app.js loaded');
//Function that calls AJAX, using drop down vals as start and destination, then displays ticket price
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
    // console.log(end);
    //checking what the destination value is and then printing the response price


    switch (end) {
      case "PEK":
        console.log(response.data.BJS[1].price);
       
        $("#price").text("$" + response.data.BJS[1].price);
       displayTablevalue();
        break;
      case "ICN":
        console.log(response.data.SEL[0].price);
              $("#price").text("$" + response.data.SEL[0].price);
        displayTablevalue();
        break;
      case "DME":
        console.log(response.data.MOW[0].price);
        displayTablevalue();
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
  $.post("/api/flights", newCountry)
   .then(function(data){
    console.log(data); 
  })
});
//  Show phrases on click
$("#go").on("click", function() {
  $("#airport").addClass("is-hidden");
  $("#loading").removeClass("is-hidden");
  // setTimeout(flight, 2000);
  flight();
});


/**API code for translate function 
 * 
 * 
 * *******************************
***********************************/


const axios = require("axios");

axios({
    method:`POST`,
    url:`https://my-translator-pro.p.rapidapi.com/api/translate`,
    headers:{
    "content-type":"application/json",
    "x-rapidapi-host":"my-translator-pro.p.rapidapi.com",
    "x-rapidapi-key":"f0ce25292dmsha2e4b8e0953bbd1p1fed83jsnfd16ad1763cf",
    targetlanguage:`RU`,
    accept:"application/json"
    },"data":{
    sourceText:`Hello`
    }
    })
    .then((response)=>{
      console.log(response.data.Translated)
    })
    .catch((error)=>{
      console.log(error)
    })

    




// function handleRequest(req, res) {

//   // Capture the url the request is made to
//   var path = req.url;

//   // Depending on the URL, display a different HTML file.
//   switch (path) {

//   case "/index":
//     return displayRoot(res);

//   case "/portfolio":
//     return displayPortfolio(res);

//   default:
//     return display404(path, res);
//   }
// }

// // When someone visits the "http://localhost:8080/" path, this function is run.
// function displayRoot(res) {
//   var myHTML = "<html>" +
//     "<body><h1>Home Page</h1>" +
//     "<a href='/portfolio'>Portfolio</a>" +
//     "</body></html>";

//   // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
//   res.writeHead(200, { "Content-Type": "text/html" });

//   // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//   res.end(myHTML);
// }

// // When someone visits the "http://localhost:8080/portfolio" path, this function is run.
// function displayPortfolio(res) {
//   var myHTML = "<html>" +
//     "<body><h1>My Portfolio</h1>" +
//     "<a href='/'>Go Home</a>" +
//     "</body></html>";

//   // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
//   res.writeHead(200, { "Content-Type": "text/html" });

//   // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//   res.end(myHTML);
// }

// // When someone visits any path that is not specifically defined, this function is run.
// function display404(url, res) {
//   var myHTML = "<html>" +
//     "<body><h1>404 Not Found </h1>" +
//     "<p>The page you were looking for: " + url + " can not be found</p>" +
//     "</body></html>";

//   // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
//   res.writeHead(404, { "Content-Type": "text/html" });

//   // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//   res.end(myHTML);
// }

// displayTablevalue =()=>{
// let countryname = $("#end :selected").text();
//   let countryLower = countryname.toLowerCase();
//   var path = req.url;
//   // let newUrl = `http://localhost:8080/${countryLower}`
//   // window.location.replace= newUrl;
//   switch (path){
//     case "/index":
//       return ("htt")

//   }

// }
















// Dmitry
// for (i=0; i< Phrase.length; i++){
// 	if (Phrase.countryname ==="Korea"){
// 		var country = val(phrase.countryname);
// 		$("#country").append(country)
// 	}
// }
// $("#end").on("click", function(e) {
// 	e.preventDefault();
// 	let end = $("#end :selected").text();
// 	console.log(end)
// 	if (end === "China"){
// 		console.log("you are almost chinese")
// 		languagesdb.Phrase.findALL({
// 			where:{
// 				countryname:"China"
// 			}
// 		});
// 			console.log(response);
// 		}else if(end==="Korea"){
// 			console.log("Lets go to korea")
// 	}else{
// 		console.log("Lets go to Russia")
// 	}
//   });
// // Khalil
// function GetSelectedEnd(end){
// 	// let end = $("#end :selected").val();
// 	switch(end){
// 			case "PEK":
// 					showChina();
// 					break;
// 			case "ICN":
// 					showKorea();
// 					break;
// 			case "DME":
// 					showRussia();
// 					break;
// 			default:
// 					alert("Please choose a country")
// 	}
// };
// function showChina (){
// 	var query = connection.query("SELECT * FROM Phrase WHERE ? ", [
// 			{
// 			countryname: "China"
// 	}
// ], function(err, res){
// 	if (err) throw err;
// 	console.log(res);
// })
// 	console.log(query.sql)
// }