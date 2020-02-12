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