/* jshint esversion: 6 */

// Create a database called "drinkdb":
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/drinkdb'

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("menu");
  var myobj = { name: "Company Inc", address: "Highway 37" };

  // If you try to insert documents in a collection that do not exist, MongoDB will create the collection automatically.
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("drinks").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    console.log(res.insertedCount)
    db.close();
  });
});


/* require: "menuHoliday.js", "menuNormalParse.js"

call db builing function? pass unique id string.
*/
//function buildDB (db) {
  //var id = 0
  //generateNormalEntry(db, id) /* TODO: connect id from here to the generate_drink function */
  // generateHolidayEntry(db, id)  /* TODO: build menuHoliday */
//}
