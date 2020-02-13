// For testing api
// let end = "ICN";
// let start = "DCA";
// selecting end location

// selecting end location
function GetSelectedEnd() {
  // var e = document.getElementById("end");
  let end = $("#end :selected").val();
  // var end = JSON.stringify(e.options[e.selectedIndex].value);
  // JSON.stringify(end);
  console.log(end);
  return end;
}

/*
console.log(userzip);
	selectedSign = $("#birthday-input :selected").val();
	console.log(selectedSign); 
	$("#your-sign").text("Your astrological sign: " + selectedSign); // telling user what their sign is, it's displayed on top daily scope
	scopeURL = "https://aztro.sameerkumar.website?sign="+selectedSign+"&day=today";
*/

// selecting start location
function GetSelectedStart() {
  // var s = document.getElementById("start");
  let start = $("#start :selected").val();
  // var start = JSON.stringify(s.options[s.selectedIndex].value);
  // JSON.stringify(start);
  console.log(start);
  return start;
}

/*
function mapAjaxCall1() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[1].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response) {
		// console.log(response.route.distance)
		$("#user1-distance").text(`This user is ${response.route.distance} miles away`)
	})
}
*/

// $.ajax({
// 	url:`https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?destination=${end}&origin=${start}&currency=USD&page=1`,
//   method: "GET",
//   headers: {
//     "x-rapidapi-host":
//       "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
//     "x-rapidapi-key": "aa3dd9aaf7msh72e32624a82ff64p19458djsnf620a5c313c0",
//     "x-access-token": "67284ded587b515fc873b2264829b953"
//   }
// })
// let settings = {

//   async: true,
//   crossDomain: true,
//   url: `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?destination=${end}&origin=${start}&currency=USD&page=1`,
//   method: "GET",
//   headers: {
//     "x-rapidapi-host":
//       "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
//     "x-rapidapi-key": "aa3dd9aaf7msh72e32624a82ff64p19458djsnf620a5c313c0",
//     "x-access-token": "67284ded587b515fc873b2264829b953"
//   }
// };
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
  }).done(function(response) {
    console.log(response.data);
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
});

//  Show phrases on click
$("#go").on("click", function() {
  $("#airport").addClass("is-hidden");
  $("#phrases").removeClass("is-hidden");
  $("#avrg").removeClass("is-hidden");
  GetSelectedStart();
  GetSelectedEnd();
  flight();
});
