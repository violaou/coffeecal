/*jshint esversion: 6 */

/*
Product Name (1)
Size (2)
Milk (3)
Whip (4)
Extras (5)
Serving Size
Calories
Total Fat (g)
Saturated Fat (g)
Trans Fat (g)
Cholesterol (mg)
Sodium (mg)
Total Carbohydrates (g)
Dietary Fiber (g)
Sugar (g)
Protein (g)
Vitamin A (%DV)
Vitamin C (%DV)
Calcium (%DV)
Iron (%DV)
Caffeine (mg)


Caramel Brûlé Latte
Short
Nonfat
No Whip
N/A
236 mL
160
0.2
0.2
0
5
120
33
0
25
6
8%
0%
15%
0%
75
Caramel Brûlé Latte
Short
Nonfat
Whip
N/A
236 mL
220
5
3.5
0.2
20
125
36
0
28
6
15%
0%
20%
0%
75
*/

/*
------LOGIC------
Every 21 lines theres a new drink
possible ways to parse:
  iterate every 21 lines title-> size...-> skip next 10 lines (O(n) time)
  Start from the top /bottom and meet at the middle? idk hmm
  cut doc into 21 per line chunks and then parse each chunk (is this more efficent in javascript?)
*/


function generate_holidayentry (db) {
  file = open('holidaymenu.txt')
  // map generate drink on each 21 element of array
  for (i=0; i < obj_array.length; i++) {
    var entry = obj_array[i]
    db.add(drink.id, entry)
  }
  close('holidaymenu.txt')
}

// returns a drink obj with desired info per 21 lines of drinks
function generateDrink(i) {
  var name = i.replace(foundgroup[0], '')
  var size = info[0] // Trenta|Venti®|Grande|Tall|Short|N/A
  var milk = info[1] // Nonfat|2%|Soy|Almond|Whole|N/A|Coconut
  var whip = function () {
    var term = info[2]
    if (term === 'No') {
      info = info.slice(4)
      return 'No Whip'
    }
    info = info.slice(3)
    return term // Whip, N/A
  }
  var kcal = info[2] // just an integer
  var newdrink = new Drink(name, size, milk, whip, kcal)
  return newdrink
}

// drink object for each type of drink
function Drink (name, size, milk, whip, kcal) {
  this.id = uniqueid + 1
  this.name = name
  this.size = size
  this.milk = milk
  this.whip = whip
  this.kcal = kcal
}
