/* eslint-disable no-nested-ternary */
/**
 * Generate Drinks and store them into JSON format from the raw files.
 */

import * as lineReader from 'line-reader';
import * as fs from 'fs';
import * as objectHash from 'object-hash';

const REGEX = /(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad|([0-9]*ml)).*/g;
const LINE_REGEX = /(?:\S+\s+){0}(\S+)/g;
const NAME_REGEX = /.+?(?=(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad))/g;

function generateDrink(paragraph: string): Drink|undefined {
  if (paragraph) {
    const infoMatch = paragraph.match(REGEX);
    const nameMatch = paragraph.match(NAME_REGEX);
    const info: RegExpMatchArray | null = infoMatch ? infoMatch[0].match(LINE_REGEX) : null;
    const name: string | null = nameMatch ? nameMatch[0] : null;

    if (info && name) {
      const whip = (info[2].includes('Whip'));
      // Espresso Con Panna has an extra category after whip...
      const kcal = name.includes('Espresso Con Panna')
        ? parseInt(info[4], 10)
        : parseInt(whip ? info[3] : info[4].includes('mL') ? info[3] : info[4], 10);
      const drink: Drink = {
        name,
        size: info[0] as DrinkSize,
        milk: (info[1].includes('N/A') ? null : info[1]) as Milk,
        whip,
        kcal,
      };
      return drink;
    }
  }
}
/* process menu file line by line, create drink object into array */
function readIn() {
  const arr: { [name: string]: Drink } = {};
  lineReader.eachLine('./raw/normal_menu.txt', (line: string) => {
    const drink = generateDrink(line);
    // console.log(drink);
    if (drink) {
      const hash = objectHash.sha1(drink); // uniqueId
      arr[hash] = drink;
    }
  }, (err) => {
    if (err) throw err;
    /* JSON store it in file */
    const data = JSON.stringify(arr);
    fs.writeFile('./data/test.txt', data, () => {
      if (err) console.log(err);
    });
  });
}

// run stuff here
readIn();
console.log('Drinks txt generated.');
