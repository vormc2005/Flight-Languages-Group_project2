module.exports = function(sequelize, Datatypes){
  var Language = sequelize.define("Language", {
    phrase: Datatypes.STRING,
    inLanguage: Datatypes.STRING,
    pronunciation: Datatypes.STRING
  });
  return Language;
}