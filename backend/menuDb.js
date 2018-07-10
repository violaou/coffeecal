/*jshint esversion: 6 */

//Create a database called "drinkdb":
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/drinkdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


/* require: "menuHoliday.js", "menuNormalParse.js"

call db builing function? pass unique id string.
*/
function build_db (db) {
  var id = 0;
  generate_normalentry(db, id); /*TODO: connect id from here to the generate_drink function*/
  generate_holidayentry(db, id); /*TODO: build menuHoliday*/
}
