// from : https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
var Drinkmodel = require('./drinkmodel.js')

// print out all drinks
var Drinks = Drinkmodel.find();
Drinks.select('name');
Drinks.exec(function(err, drink) {
  //console.log(drink);
});

Drinkmodel.find({'size': 'Tall'}, 'name', function (err, result) {
  if (err) return handleError(err);
  console.log(result)
})

//module.exports = Drinks;
