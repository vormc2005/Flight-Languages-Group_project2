// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api/flights", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(function(dbLang) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbLang);
    });
  });

  // POST route for saving a new todo
  app.post("/api/flights", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Language.create({
      phrase: req.body.phrase,
      inLanguage: req.body.inLanguage,
      pronunciation: req.body.pronunciation
    }).then(function(dbLang) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbLang);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/flights/:id", function(req, res) {});

  // PUT route for updating flights. We can get the updated todo from req.body
  app.put("/api/flights", function(req, res) {});
};