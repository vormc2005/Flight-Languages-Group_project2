// Dependencies
// =============================================================
var express = require("express");
const db = require("./app/models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./groupproject2/app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
  })
})

/**********************************************
 * 
 * 
 * 
 */
// var express = require("express");
// var exphbs = require("express-handlebars");
// var mysql = require("mysql");

// var app = express();

// // Set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var PORT = process.env.PORT || 8040;

// // Parse request body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Mysql#123",
//   database: "languages"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

// // Use Handlebars to render the main index.html page with the phrases in it.
// app.get("/", function(req, res) {
//   connection.query("SELECT name, code, english, translated FROM phrases INNER JOIN country_codes ON  country_id=country_codes.id", function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.render("phrases", { phrases: data });
//   });
// });

// // Create a new phrase
// app.post("/api/phrases", function(req, res) {
//   connection.query("INSERT INTO phrases (phrase) VALUES (?)", [req.body.phrase], function(err, result) {
//     if (err) {
//       return res.status(500).end();
//     }

//     // Send back the ID of the new phrase
//     res.json({ id: result.insertId });
//     console.log({ id: result.insertId });
//   });
// });

// // Update a plan
// app.put("/api/phrases/:id", function(req, res) {
//   connection.query("UPDATE phrases SET phrase = ? WHERE id = ?", [req.body.phrase, req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.changedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   });
// });






// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });
