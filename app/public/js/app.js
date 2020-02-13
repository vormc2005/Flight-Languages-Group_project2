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
  }).then(function(response) {

    let search = response.data;
    console.log(search);
    console.log(end);
    // if (response.data.BJS[0].price) {
    //   console.log(response.data.BJS[0].price);
    //   console.log("china");
    //   $("#price").text("$" + response.data.BJS[0].price);
    // } else if (response.data.SEL[0].price) {
    //   console.log(response.data.SEL[0].price);
    //   console.log("korea");
    //   $("#price").text("$" + response.data.SEL[0].price);
    // } else if (response.data.MOW[0].price) {
    //   console.log("Russia");
    //   console.log(response.data.MOW[0].price);
    //   $("#price").text("$" + response.data.MOW[0].price);
		// }
		GetSelectedEnd(end);
    switch (end) {
      case "PEK":
        console.log("china");
        console.log(response.data.BJS[1].price);
        $("#price").text("$" + response.data.BJS[1].price);
        break;
      case "ICN":
        console.log("korea");
        console.log(response.data.SEL[0].price);
        $("#price").text("$" + response.data.SEL[0].price);
        break;
      case "DME":
        console.log("russia");
        console.log(response.data.MOW[0].price);
        $("#price").text("$" + response.data.MOW[0].price);
        break;
    }

    // console.log(response.data);
    // console.log(response.data.BJS);
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
	//   GetSelectedStart();
	flight();
	//   showPhrase();
});

function GetSelectedEnd(end){
	// let end = $("#end :selected").val();
	switch(end){
			case "PEK":
					showChina();
					break;
			case "ICN":
					showKorea();
					break;
			case "DME":
					showRussia();
					break;
			default: 
					alert("Please choose a country")
	}
};
function showChina (){
	var query = connection.query("SELECT * FROM Phrase WHERE ? ", [
			{
			countryname: "China"
	}
], function(err, res){
	if (err) throw err;
	console.log(res);
})
	console.log(query.sql)
}