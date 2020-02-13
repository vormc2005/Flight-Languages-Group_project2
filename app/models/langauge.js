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

/*Name Chinese
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
            Yes/No sure/boo sure
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

/*Name Korean
          <div id="hello">
            Hello ahn young ha say yo
          </div>
          <div id="goodbye">
            Goodbye ahn young geh say yo
          </div>
          <div id="thankYou">
            Thank you gahm sahm knee dah
          </div>
          <div id="excuseMe">
            Excuse me joe gi yo
          </div>
          <div id="mayI">
            May I have ... ________ joe say yo
          </div>
          <div id="howMuch">
            How much does it cost? ol ma nah yo?
          </div>
          <div id="bathroom">
            Bathroom way hwa jyang she'll
          </div>
          <div id="yN">
            Yes/No neh/ahni
          </div>
          <div id="allergy">
            I am allergic to ...  _______ moat moe go
          </div>
          <div id="whereIs">
            Where is ... ______ ouh lee ees oh yo
          </div>
          <div id="help">
            Help doe wa joe say so
          </div>
          <div id="sorry">
            Sorry jay song haam knee dah
          </div>
*/


/*Name Rusiian
          <div id="hello">
            Hello Zdravstvuite
          </div>
          <div id="goodbye">
            Goodbye Do svidaniya
          </div>
          <div id="thankYou">
            Thank you Spasibo
          </div>
          <div id="excuseMe">
            Excuse me Izvinite
          </div>
          <div id="mayI">
            May I have ... Mojno mne...
          </div>
          <div id="howMuch">
            How much does it cost? Skol'ko stoit?
          </div>
          <div id="bathroom">
            Bathroom Tualet
          </div>
          <div id="yN">
            Yes/No Da/Net
          </div>
          <div id="allergy">
            I am allergic to ...  U meniya alergiya
          </div>
          <div id="whereIs">
            Where is ...Gde nahoditsiya
          </div>
          <div id="help">
            Help Pomogite
          </div>
          <div id="sorry">
            Sorry Proshu prosheniya
          </div>
*/