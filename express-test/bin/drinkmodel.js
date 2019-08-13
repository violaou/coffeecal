
/* jshint esversion: 6 */

const readline = require('readline');
const fs = require('fs');
let mongoose = require("mongoose");

mongoose.set('debug', true);

// use moongoose to connect
const server = 'localhost:27017';
const database = 'coffeecal';

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connection successful')
});


/*A Mongoose model is a wrapper on the Mongoose schema.
A Mongoose schema defines the structure of the document, default values,
validators, etc., A Mongoose model provides an interface to the Database
or creating, querying, updating, deleting records, etc.*/
var drinkSchema = new mongoose.Schema({
  name: String,
  size: String,
  milk: String,
  whip: String,
  kcal: Number
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
/*drinkSchema.methods.speak = function () {
  var greeting = this.name
    ? "My name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

drinkSchema.methods.findSimilarSize = function() {
  return this.model('Drinks').find({ type: this.size });
};
*/

// Model creation, a class in which we construct documents
var Drinks = mongoose.model('Drinks', drinkSchema);

Drinks.estimatedDocumentCount({}, function(err, count) {
    if (err) { return handleError(err) } //handle possible errors
    console.log(count + " objects counted");

    if (count == 0) {
      addDrinks();
      console.log("repopulating database...");
    }
})

// delete all documents
//clearDrink();
function clearDrink() {
  var query = Drinks.deleteMany({});
  query.exec(function(err, drink) {
    console.log(drink);
  });
}

function generateDrink (paragraph) {
  const regex = /(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad|([0-9]*ml)).*/g;
  const lineregex = /(?:\S+\s+){0}(\S+)/g;
  const nameregex = /.+?(?=(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad))/g;

  var info = paragraph.match(regex)[0].match(lineregex);
  var name = paragraph.match(nameregex)[0];

  var size = info[0];
  var milk = info[1];
  // if No Whip option
  if (info[2] == "No"){
    var whip = info[2]+info[3];
    var kcal = info[6];
  } else {
    var whip = info[2];
    var kcal = info[5];
  }
  // new document
  var newDrink = new Drinks({
    name: name,
    size: size,
    milk: milk,
    whip: whip,
    kcal: kcal
  });
  return newDrink;
}

function addDrinks(){
  /*process menu file line by line, create drink object into array*/
  var readFile = (callback) => {
      readInterface = readline.createInterface({
      input: fs.createReadStream('normal_menu.txt')
        //,output: process.stdout
      });

    readInterface.on('line', function(line) {
      var drink = generateDrink(line);

      //save to db
      drink.save(function (err, mochafrap) {
        if (err) return handleError(err);
      })

    }).on('close', () => {
      console.log('populated');
    });
  };
  //usage
  readFile('normal_menu.txt', (arr) => {
    console.log(arr.length)
  })
}

module.exports = Drinks;
