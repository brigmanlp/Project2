// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our citizen models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the citizen and preloaded submits

    app.get('/api/citizencontribution', function(req, res) {
        db.citizencontribution.findAll({})
            .then(function(dbcitizencontribution) {
                res.json(dbcitizencontribution);
            });
    });

    // POST route for saving a new post
    app.post("/api/citizencontribution", function(req, res) {
        console.log(req.body);
        db.citizencontribution.create({
                FeatureName: req.body.FeatureName,
                Theme: req.body.Theme,
                FeatureDetails: req.body.FeatureDetails,
                FeatureLocation: req.body.FeatureLocation,
                Image1Path: req.body.Image1Path,
                Image1Description: req.body.Image1Description,
                Link1Path: req.body.Link1Path,
                Link1Description: req.body.Link1Description,
            })
            .then(function(dbcitizencontribution) {
                res.json(dbcitizencontribution);
            });
    });

    // Get route for returning posts of a specific category (Theme)
    app.get("/api/theme/:theme", function(req, res) {
        db.citizencontribution.findAll({
                where: {
                    Theme: req.params.theme
                }
            })
            .then(function(dbcitizencontribution) {
                res.json(dbcitizencontribution);
            });
    });

    // Get route for returning posts of a specific ID (ID)
    app.get("/api/id/:id", function(req, res) {
        db.citizencontribution.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbcitizencontribution) {
                res.json(dbcitizencontribution);
            });
    });

    // DELETE route for deleting posts
    app.delete("/api/removebyid/:id", function(req, res) {
        db.citizencontribution.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbcitizencontribution) {
                res.json(dbcitizencontribution);
            });
    });
    // PUT route for updating posts
    app.put("/api/updatebyid/:id", function(req, res) {
        db.citizencontribution.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function(dbcitizencontribution) {
                res.json(dbcitizencontribution);
            });
    });
};