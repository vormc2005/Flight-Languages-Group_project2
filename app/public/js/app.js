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
    // switch (response.data) {
    //   case "BJS":
    //     console.log("china");
    //     break;
    //   case "SEL":
    //     console.log("korea");
    //     break;
    //   case "MOW":
    //     console.log("russia");
    //     break;
    // }
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
  flight();
});