const REGEX: RegExp =
    /(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad|([0-9]*ml)).*/g;
const LINE_REGEX: RegExp = /(?:\S+\s+){0}(\S+)/g;
const NAME_REGEX: RegExp =
    /.+?(?=(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad))/g;

type DrinkSize =
    | "Short"
    | "Tall"
    | "Grande"
    | "Venti"
    | "Venti®"
    | "Trenta"
    | "N/A"
    | "Solo"
    | "Doppio"
    | "Triple"
    | "Quad";
type Milk = "Soy" | "Coconut" | "Nonfat" | "Oat" | "Whole" | "2%";
type Whip = "No Whip" | "Whip";

export interface Drink {
    name: string;
    size?: DrinkSize;
    milk?: Milk;
    whip?: Whip;
    kcal: number;
}

function generateDrink(paragraph: string): Drink | undefined {
    if (paragraph) {
        const infoMatch = paragraph.match(REGEX);
        const nameMatch = paragraph.match(NAME_REGEX);
        let info: RegExpMatchArray | null = infoMatch ? infoMatch[0].match(LINE_REGEX) : null;
        let name: string| null = nameMatch ? nameMatch[0] : null;

        if (info && name) {
            const whip = info[2] === "No";
            const drink: Drink = {
                name: name,
                size: info[0] as DrinkSize,
                milk: info[1] as Milk,
                whip: (whip ? info[2] : info[2] + info[3]) as Whip,
                kcal: parseInt(whip ? info[3] : info[4]),
            }
            return drink;
        }
    }
}

// returns a drink obj with desired info per 21 lines of drinks
function generateHolidayDrink(paragraph: string): Drink | undefined {
    if (paragraph) {
        const infoMatch = paragraph.match(REGEX);
        const nameMatch = paragraph.match(NAME_REGEX);
        let info: RegExpMatchArray | null = infoMatch ? infoMatch[0].match(LINE_REGEX) : null;
        let name: string| null = nameMatch ? nameMatch[0] : '';

        if (info) {
            const whip = info[2] === "No";
              var whipp = function () {
                var term = info[2]
                if (term === 'No') {
                info = info.slice(4)
                return 'No Whip'
                }
                info = info.slice(3)
                return term // Whip, N/A
            }
            const drink: Drink = {
                name: name,
                size: info[0] as DrinkSize,
                milk: info[1] as Milk,
                whip: (whip ? info[2] : info[2] + info[3]) as Whip,
                kcal: parseInt(whip ? info[3] : info[4]),
            }
            return drink;
        }
    }
  var name = paragraph.replace(foundgroup[0], '')
  var size = info[0]
  var milk = info[1]
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

const readline = require("readline");
const fs = require("fs");
/*process menu file line by line, create drink object into array */
function readInterface() {
    readline.createInterface({
        input: fs.createReadStream("normal_menu.txt"),
        output: process.stdout,
        console: false,
    });
}

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