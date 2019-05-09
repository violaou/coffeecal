/* Hello, World! program in node.js */
console.log('Hello, World!')
// var http = require("http");
// http.createServer(function (request, response) {
//    // Send the HTTP header
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);
//
// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

// to run: [node app.js]

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var mongoose = require("mongoose");
// const path = require('path')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({limit: '50mb'}))
app.use(express.static('static'))

app.get('/', function (req, res, next) {
  res.sendFile('index.html')
})
app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

// use moongoose to connect
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/coffeecal", { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // connection!
});
var Schema = mongoose.Schema;

//TODO: probably bad design to but all the Schema and stuff here but testing right now.
const drinkSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  size: String,
  milk: String,
  whip: String,
  kcal: Number
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
drinkSchema.methods.speak = function () {
  var greeting = this.name
    ? "My name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

drinkSchema.methods.findSimilarSize = function() {
  return this.model('Drinks').find({ type: this.size });
};

// compliling schema into a Model, a class in which we construct documents
var Drinks = mongoose.model('Drinks', drinkSchema);
//document -> a drink with properties and behaviours as our Schema
var mochafrap = new Drinks({
  _id: new mongoose.Types.ObjectId(),
  name: 'Mocha Frappucino',
  size: 'Grande',
  milk: '2%',
  whip: 'Whip',
  kcal: 354
});
//console.log(mochafrap.name); // Grande Mocha Frappucino
//mochafrap.speak(); // "My name is Grande Mocha Frappucino"

//save to db
mochafrap.save(function (err, mochafrap) {
  if (err) return console.error(err);
})

//sample query, find all documents with name pro that begins with mocha and returns array of Drinks to callback.
var query = Drinks.findOne({name: /^Mocha/});
query.select('name');
query.exec(function(err, drink) {
  console.log(drink);
});
