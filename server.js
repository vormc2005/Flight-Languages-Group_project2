// Dependencies
// =============================================================
const express = require("express");
const db = require("./app/models");
const exphbs = require("express-handlebars");
const sequelize = require("sequelize");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8040;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/html-routes.js")(app);
require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  });
});
