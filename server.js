// set up ======================================================================
// dependencies
var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
//express setup
var app = express();
var port = 3000;
//import Todo models
var Todo = require("./app/models/ToDo.js");

// configuration ===============================================================
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//starting point
app.use(express.static(__dirname + "/app"));

// Database configuration with mongoose
mongoose.connect("mongodb://heroku_7b2825r4:748rn1tnvauh8gvua7g3auqaq1@ds123400.mlab.com:23400/heroku_7b2825r4");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// routes ===============================================================
// get all todos
    app.get('/api/todos', function(req, res) {

        // use mongoose to get all todos in the database
        Todo.find({},function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err){
              res.send(err);
            }
            res.json(todos); // return all todos in JSON format
        });
    });

// create todo and send back all todos after creation
    app.post('/api/todos', function(req, res) {
      console.log(req.body);
        // create a todo, information comes from AJAX request from Angular
        var entry = new Todo(req.body);
        entry.save(function(err, doc) {
          if (err) {
            res.json(err);
          }
          else {
            console.log(doc);
            res.json(doc);
          }
        });
    });

app.listen(port, function() {
    console.log("listening on port:" + port);
});
