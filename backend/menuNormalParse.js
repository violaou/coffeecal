/*jshint esversion: 6 */
/*
normalmenu format;
Starbucks Coffee Company
Beverage Nutrition Information
Product Name
Size
Milk
Whip
Serving Size
Calories

Brewed Coffee - Dark Roast Short N/A N/A 236 mL 3 0.1 0 0 0 5 0 0 0 0.3 0% 0% 0% 0% 130
Brewed Coffee - Dark Roast Venti® N/A N/A 591 mL 5 0.1 0 0 0 10 0 0 0 1 0% 0% 2% 0% 340
Brewed Coffee Traveler - Dark Roast 1 - 236 mL serving N/A N/A 236 mL 3 0.1 0 0 0 5 0 0 0 0.3 0% 0% 0% 0% 130
Brewed Coffee - Decaf Pike Place® Roast Tall N/A N/A 354 mL 4 0.1 0 0 0 10 0 0 0 0.5 0% 0% 0% 0% 20
Cinnamon Dolce Latte Tall Nonfat Whip 354 mL 220 6 4 0.2 30 115 33 0 31 9 25% 0% 30% 0% 75
Cinnamon Dolce Latte Tall 2% No Whip 354 mL 200 5 2.5 0.2 20 125 30 0 29 9 15% 0% 30% 0% 75

Short N/A N/A 236 mL 3 0.1 0 0 0 5 0 0 0 0.3 0% 0% 0% 0% 130
Short N/A N/A 236 mL 3 0.1 0 0 0 5 0 0 0 0.3 0% 0% 0% 0% 15
Tall N/A N/A 354 mL 4 0.1 0 0 0 10 0 0 0 0.5 0% 0% 0% 0% 20
Tall Nonfat Whip 354 mL 220 6 4 0.2 30 115 33 0 31 9 25% 0% 30% 0% 75
Tall 2% No Whip 354 mL 200 5 2.5 0.2 20 125 30 0 29 9 15% 0% 30% 0% 75

*/

function generate_normaldb (db){
  file = open('menu.txt');
  obj_array = file.makearray('/n').map(generate_drink); //map generate drink on each element of array
  for (i=0; i < obj_array.length; i++) {
    var entry = obj_array[i];
    db.add(drink.id, entry);
  }
  close('menu.txt');
}

// returns a drink obj with desired info per line  of drink entry
function generate_drink(i){
  //regex: (Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad|([0-9]*ml)).* returns group after size name found
  // ^ doesnt on this: Brewed Coffee Traveler - Dark Roast 1 - 236 mL serving N/A N/A 236 mL 3 0.1 0 0 0 5 0 0 0 0.3 0% 0% 0% 0% 130
  var regex = /(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad|([0-9]*ml)).*/g;
  var foundgroup = i.match(regex);
  var info = foundgroup.match(/(?:\S+\s+){0}(\S+)/g);
  var name = i.replace(foundgroup[0], '');
  var size = info[0]; //Trenta|Venti®|Grande|Tall|Short|N/A
  var milk = info[1]; //Nonfat|2%|Soy|Almond|Whole|N/A|Coconut
  var whip = function(){
    var term = info[2];
    if (term == "No") {
      info = info.slice(4);
      return "No Whip";
    }
    info = info.slice(3);
    return term; // Whip, N/A
  };
  var kcal = info[2]; //just an integer
  var newdrink = new Drink(name, size, milk, whip, kcal);
  return newdrink;
}

//drink object for each type of drink
function Drink (name, size, milk, whip, kcal){
  this.id=uniqueid+1;
  this.name=name;
  this.size=size;
  this.milk=milk;
  this.whip=whip;
  this.kcal=kcal;
}
