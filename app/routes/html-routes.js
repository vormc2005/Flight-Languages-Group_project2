// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

};