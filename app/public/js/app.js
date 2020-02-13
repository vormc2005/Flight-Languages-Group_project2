// For testing api



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





// for (i=0; i< Phrase.length; i++){
// 	if (Phrase.countryname ==="Korea"){
// 		var country = val(phrase.countryname);
// 		$("#country").append(country)

// 	}
// }


$("#end").on("click", function(e) {
	e.preventDefault();
	let end = $("#end :selected").text();	
	console.log(end)
	if (end === "China"){
		console.log("you are almost chinese")
		var connection = connection.query("SELECT * FROM Phrases", function(err, response){
			if(err) throw err;
			console.log(response);
		})
	}
  });
