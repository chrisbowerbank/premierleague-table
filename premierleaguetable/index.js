// All our requires/dependencies
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')

// Connect to our Mongo database, using Mongoose and include our models
mongoose.connect('mongodb://localhost:27017/hackerwall-solution')

//model
var Schema = mongoose.Schema

var rowSchema = new Schema({
  position: Number,
  teamName: String,
  crestURI: String,
  playedGames: String,
  points: Number
})

var Row = mongoose.model( 'index', rowSchema )



// Creating our Application
var app = express()

// Registering and use our template engine (handlebars)
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Serving static files (like css)
app.use(express.static('public'))

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true}))

var data
// Routes
// application routes (i.e. controller)
app.get('/', function( req , res ) {
  // index route
  // list every article

    Row.find({}, function( err, row ){
      res.render('index', { row: row })
    })

})



app.listen( 3000, function() {

  console.log( 'listening on 3000' )

})
