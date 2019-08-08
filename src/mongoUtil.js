var mongoose = require('mongoose');
var Drinkmodel = require('./drinkmodel.js')


// print out all drinks
var query = Drinkmodel.find();
console.log(Drinkmodel);
console.log(query);
//query.select('name');
query.exec(function(err, drink) {
  console.log(drink);
});
