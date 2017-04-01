// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// //Heroku Postgres
// var pg = require('pg');

// pg.defaults.ssl = true;
// pg.connect(process.env.DATABASE_URL, function(err, client) {
//     if (err) throw err;
//     console.log('Connected to postgres! Getting schemas...');

//     client
//         .query('SELECT table_schema,table_name FROM information_schema.tables;')
//         .on('row', function(row) {
//             console.log(JSON.stringify(row));
//         });
// });

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

// =============================================================
// Initiating our Auth0Lock
// var clientId = 'DfmtuiwnlRB1x3RAyqZwKQ9ipMiyNFVs';
// var domain = 'brigmanlp.auth0.com';
// // Instantiate Lock - without custom options
// var lock = new Auth0Lock(clientId, domain);

// // Listen for the authenticated event and get profile
// lock.on("authenticated", function(authResult) {
//     lock.getUserInfo(authResult.accessToken, function(error, profile) {
//         if (error) {
//             // Handle error
//             return;
//         }

//         // Save token and profile locally
//         localStorage.setItem("accessToken", authResult.accessToken);
//         localStorage.setItem("profile", JSON.stringify(profile));

//         // Update DOM
//     });
// });