module.exports = function(sequelize, Datatypes) {
  var Phrase = sequelize.define("Phrase", {
    countryname: Datatypes.STRING,
    hello: Datatypes.STRING,
    goodbye: Datatypes.STRING,
    thankyou: Datatypes.STRING,
    excuseme: Datatypes.STRING,
    mayi: Datatypes.STRING,
    howmuch: Datatypes.STRING,
    bathroom: Datatypes.STRING,
    yesno: Datatypes.STRING,
    allergy: Datatypes.STRING,
    whereis: Datatypes.STRING,
    help: Datatypes.STRING,
    sorry: Datatypes.STRING
  });
  return Phrase;
};

/*Name
          <div id="hello">
            Hello knee how
          </div>
          <div id="goodbye">
            Goodbye zaijian
          </div>
          <div id="thankYou">
            Thank you shyea shyea
          </div>
          <div id="excuseMe">
            Excuse me boo how ee sil
          </div>
          <div id="mayI">
            May I have ... wol kuh ee
          </div>
          <div id="howMuch">
            How much does it cost? jay guh dwoe shao chee en
          </div>
          <div id="bathroom">
            Bathroom way shung jian
          </div>
          <div id="yN">
            Yes/No sure boo sure
          </div>
          <div id="allergy">
            I am allergic to ... wol dway ___ gwol min
          </div>
          <div id="whereIs">
            Where is ... ___ zai narrrrr?
          </div>
          <div id="help">
            Help bong mong
          </div>
          <div id="sorry">
            Sorry dway boo chee
          </div>
*/
