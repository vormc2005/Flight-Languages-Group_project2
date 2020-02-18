
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
        $("#price").text("$" + response.data.MOW[0].price);
        displayTablevalue();
        break;
      case "CUN":
        console.log(response.data.CUN[0].price);
        $("#price").text("$" + response.data.CUN[0].price);
        displayTablevalue();
        break;
      case "CDG":
        console.log(response.data.PAR[0].price);
        $("#price").text("$" + response.data.PAR[0].price);
        displayTablevalue();
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
    thankyou: $("#thankyou")
      .val()
      .trim(),
    excuseme: $("#excuseme")
      .val()
      .trim(),
    mayi: $("#mayi")
      .val()
      .trim(),
    howmuch: $("#howmuch")
      .val()
      .trim(),
    bathroom: $("#bathroom")
      .val()
      .trim(),
    yesno: $("#yesno")
      .val()
      .trim(),
    allergy: $("#allergy")
      .val()
      .trim(),
    whereis: $("#whereis")
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
  });


  //clears out fields//
  // $("#country").val("")
  // $("#hello").val("")
  // $("#goodbye").val("")
  // $("#thankyou").val("")
  // $("#excuseme").val("")
  // $("#mayi").val("")
  // $("#howmuch").val("")
  // $("#bathroom").val("")
  // $("#yesno").val("")
  // $("#allergy").val("")
  // $("#whereis").val("")
  // $("#help").val("")
  // $("#sorry").val("")
});

//  Show phrases on click
$("#go").on("click", function() {
  $("#airport").addClass("is-hidden");
  $("#loading").removeClass("is-hidden");
  // setTimeout(flight, 2000);
  flight();
});


displayTablevalue =()=>{
let countryname = $("#end :selected").text();
  let countryLower = countryname.toLowerCase();
    // window.location.href = `http://localhost:8080/${countryLower}`
}
















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