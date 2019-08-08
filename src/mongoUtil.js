var Drinkmodel = require('./drinkmodel.js')


// print out all drinks
var query = Drinkmodel.find();

query.select('name');
query.exec(function(err, drink) {
  //console.log(drink);
});

module.exports = query;
