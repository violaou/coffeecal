/*jshint esversion: 6 */
/*
normalmenu format:
Product Name
Size
Milk
Whip
Serving Size
Calories
Does not have Brewed Coffee Travelers or Kids sizes
Tall N/A N/A 354 mL 4 0.1 0 0 0 10 0 0 0 0.5 0% 0% 0% 0% 20
Tall Nonfat Whip 354 mL 220 6 4 0.2 30 115 33 0 31 9 25% 0% 30% 0% 75
Tall 2% No Whip 354 mL 200 5 2.5 0.2 20 125 30 0 29 9 15% 0% 30% 0% 75
*/
var lineReader = require('line-reader');

function generateDrink (text) {
  // regex: (Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad|([0-9]*ml)).* returns group after size name found
  var regex = /(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad|([0-9]*ml)).*/g
  var foundgroup = text.match(regex)
  var info = foundgroup.match(/(?:\S+\s+){0}(\S+)/g)

  var name = i.replace(foundgroup[0], '');
  var size = info[0];
  var milk = info[1];
  // options for whip: Whip, No Whip, N/A
  if (info[2] == "No"){
    var whip = info[2]+info[3];
    var kcal = info[4];
  } else {
    var whip = info[2]
    var kcal = info[3]
  }
  var newDrink = new Drink(name, size, milk, whip, kcal)
  return newDrink
}

// drink object for eah type of drink
function Drink (name, size, milk, whip, kcal) {
  this.id = 0
  this.name = name
  this.size = size
  this.milk = milk
  this.whip = whip
  this.kcal = kcal
}

function generateJSON () {
  var arr = []
  lineReader.open('normal_menu.txt', function(err, reader) {
    if (reader.hasNextLine()) {
      reader.nextLine(function(err,line) {
        // each line in menu txt
        arr.push(generateDrink(line));
      });
    }
});

}
