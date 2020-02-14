// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/submit", function(req, res) {
  console.log("submit");
  res.sendFile(path.join(__dirname, "../public/submit.html"));
});

};