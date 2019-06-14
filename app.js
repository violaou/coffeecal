
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
const readline = require('readline');
const fs = require('fs');
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

// Create schema
var Schema = mongoose.Schema;
const drinkSchema = new Schema({
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

// Model creation, a class in which we construct documents
var Drinks = mongoose.model('Drinks', drinkSchema);

//document -> a drink with properties and behaviours as our Schema
//_id property is a MongoDB construct and the database will automatically generate one for you if you do not supply one

function generateDrink (paragraph) {
  const regex = /(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad|([0-9]*ml)).*/g;
  const lineregex = /(?:\S+\s+){0}(\S+)/g;
  const nameregex = /.+?(?=(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad))/g;

  var info = paragraph.match(regex)[0].match(lineregex);
  var name = paragraph.match(nameregex)[0];

  var size = info[0];
  var milk = info[1];
  // if No Whip
  if (info[2] == "No"){
    var whip = info[2]+info[3];
    var kcal = info[6];
  } else {
    var whip = info[2];
    var kcal = info[5];
  }

  var newDrink = new Drinks({
    name: name,
    size: size,
    milk: milk,
    whip: whip,
    kcal: kcal
  });
  return newDrink;
}

/*process menu file line by line, create drink object into array */
var readFile = (callback) => {
    readInterface = readline.createInterface({
    input: fs.createReadStream('C:/Users/Viola/Desktop/coffeecal/backend/normal_menu.txt')
      //,output: process.stdout
    });

  readInterface.on('line', function(line) {
    var drink = generateDrink(line);

    //save to db
    drink.save(function (err, mochafrap) {
      if (err) return console.error(err);
    })

  }).on('close', () => {
    //should b ok
  });
};

//usage
readFile('C:/Users/Viola/Desktop/coffeecal/backend/normal_menu.txt', (arr) => {
  console.log(arr.length)
})

//mochafrap.speak(); // "My name is Grande Mocha Frappucino"

//sample query, find all documents with name pro that begins with mocha and returns array of Drinks to callback.
var query = Drinks.find();
//query.select('name');
query.exec(function(err, drink) {
  console.log(drink);
});
