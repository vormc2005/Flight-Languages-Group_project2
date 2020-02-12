// For testing api
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?destination=ICN&origin=DCA&currency=USD&page=1",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
		"x-rapidapi-key": "aa3dd9aaf7msh72e32624a82ff64p19458djsnf620a5c313c0",
		"x-access-token": "67284ded587b515fc873b2264829b953"
	}
}
function flight(){
$.ajax(settings).done(function (response) {
	console.log(response);
});
}
flight()



$("#add-new").on("click", function(event){
	console.log("clicked")
	event.preventDefault();

	var newCountry = {
		country: $("#country").val().trim(),
		hello: $("#hello").val().trim(),
		goodbye: $("#goodbye").val().trim(),
		thanks: $("#thank-you").val().trim(),
		excuse: $("#excuse-me").val().trim(),
		may_i: $("#may-I").val().trim(),
		how_much: $("#how-much").val().trim(),
		bathroom: $("#bathroom").val().trim(),
		yes: $("#yes").val().trim(),
		allergic: $("#allergic").val().trim(),
		where: $("#where").val().trim(),
		help: $("#help").val().trim(),
		sorry: $("#sorry").val().trim()
		
	}
	console.log(newCountry);
})

	//  Show phrases on click
	$("#go").on("click", function () {
		$("#airport").addClass("is-hidden");
		$("#phrases").removeClass("is-hidden");
	})
