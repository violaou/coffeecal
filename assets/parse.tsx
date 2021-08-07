/*jshint esversion: 6 */
/*
normal_menu.txt format:
Product Name Size Milk Whip Serving Size Calories etc
Does not have Brewed Coffee Travelers or Kids sizes
ex: Cold Brewed Coffee Tall 2% No Whip 354 mL 200 5 2.5 0.2 20 125 30 0 29 9 15% 0% 30% 0% 75
*/
const readline = require('readline');
const fs = require('fs');

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
    var kcal = info[4];
  } else {
    var whip = info[2];
    var kcal = info[3];
  }
  var newDrink = new Drink(name, size, milk, whip, kcal);
  return newDrink;
}

// drink object for eah type of drink
function Drink (name, size, milk, whip, kcal) {
  this.name = name
  this.size = size
  this.milk = milk
  this.whip = whip
  this.kcal = kcal
}

/*process menu file line by line, create drink object into array */
const readInterface = readline.createInterface({
    input: fs.createReadStream('normal_menu.txt'),
    output: process.stdout,
    console: false
});

var arr = []
readInterface.on('line', function(line) {
  var drink = generateDrink(line);
  arr.push(drink);
});

/*JSON store it in file*/
var jsonData = JSON.stringify(arr)
fs.writeFile("test.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});
