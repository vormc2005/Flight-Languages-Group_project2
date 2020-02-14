// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api/flights/:countryname", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Phrase.findAll({
      where: { countryname: req.params.countryname }
    }).then(function(dbPhrase) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbPhrase);
    });
  });

  // POST route for saving a new todo
  app.post("/api/flights", function(req, res) {
    console.log(req.body);
    
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Phrase.create({
      countryname: req.body.countryname,
      hello: req.body.hello,
      goodbye: req.body.goodbye,
      thankyou: req.body.thankyou,
      excuseme: req.body.excuseme,
      mayi: req.body.mayi,
      howmuch: req.body.howmuch,
      bathroom: req.body.bathroom,
      yesno: req.body.yesno,
      allergy: req.body.allergy,
      whereis: req.body.whereis,
      help: req.body.help,
      sorry: req.body.sorry
    })
    
    .then(function(dbPhrase) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbPhrase);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/flights/:id", function(req, res) {});

  // PUT route for updating flights. We can get the updated todo from req.body
  app.put("/api/flights", function(req, res) {});
};
