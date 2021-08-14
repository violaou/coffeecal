/**
 * Generate Drinks and store them into JSON format from the raw files.
 */

import * as lineReader from 'line-reader';
import * as fs from 'fs';
import * as objectHash from 'object-hash';

const REGEX: RegExp = /(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad|([0-9]*ml)).*/g;
const LINE_REGEX: RegExp = /(?:\S+\s+){0}(\S+)/g;
const NAME_REGEX: RegExp = /.+?(?=(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad))/g;

function generateDrink(paragraph: string): Drink | undefined {
    if (paragraph) {
        const infoMatch = paragraph.match(REGEX);
        const nameMatch = paragraph.match(NAME_REGEX);
        let info: RegExpMatchArray | null = infoMatch ? infoMatch[0].match(LINE_REGEX) : null;
        let name: string | null = nameMatch ? nameMatch[0] : null;

        if (info && name) {
            const whip = info[2] === "No";
            const drink: Drink = {
                name: name,
                size: info[0] as DrinkSize,
                milk: info[1] as Milk,
                whip: (whip ? info[2] : info[2] + info[3]) as Whip,
                kcal: parseInt(whip ? info[3] : info[4]),
            };
            return drink;
        }
    }
}
/*process menu file line by line, create drink object into array */
function readIn() {
    let arr: { [name: string]: Drink } = {};
    lineReader.eachLine('./raw/normal_menu.txt', (line: string) => {
        const drink = generateDrink(line);
        // console.log(drink);
        if (drink) {
            const hash = objectHash.sha1(drink);
            arr[hash] = drink;
        }
    }, (err)=>{
        if (err) throw err;
        /*JSON store it in file*/
        const data = JSON.stringify(arr);
        fs.writeFile("./data/test.txt", data, (err) =>{
            if (err) console.log(err);
        });
    });
}

// run stuff here
readIn();
console.log('Drinks txt generated.');
