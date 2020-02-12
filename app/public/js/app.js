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
