/* jshint esversion: 6 */

// Create a database called "drinkdb":
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/drinkdb'

MongoClient.connect(url, function (err, db) {
  if (err) throw err
  console.log('Database created!')
  db.close()
})


/* require: "menuHoliday.js", "menuNormalParse.js"

call db builing function? pass unique id string.
*/
function buildDB (db) {
  var id = 0
  generateNormalEntry(db, id) /* TODO: connect id from here to the generate_drink function */
  // generateHolidayEntry(db, id)  /* TODO: build menuHoliday */
}
