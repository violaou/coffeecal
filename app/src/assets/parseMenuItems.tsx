/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/**
 * Generate Drinks and store them into JSON format from the raw files.
 * many thanks to this post for some guidance!
 * https://old.reddit.com/r/starbucks/comments/ds3iw3/my_guide_to_calorie_counting_and_decreasing/
 */

import * as lineReader from 'line-reader'
import * as fs from 'fs'

const REGEX = /(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad|([0-9]*ml)).*/g
const LINE_REGEX = /(?:\S+\s+){0}(\S+)/g
const NAME_REGEX = /.+?(?=(Trenta|Venti®|Grande|Tall|Short|N\/A|Solo|Doppio|Triple|Quad))/g

function generateDrink(paragraph: string): Drink | null {
  if (paragraph.length > 1) {
    const infoMatch = paragraph.match(REGEX)
    const nameMatch = paragraph.match(NAME_REGEX)
    const info: RegExpMatchArray | null = infoMatch ? infoMatch[0].match(LINE_REGEX) : null
    const name: string | null = nameMatch ? nameMatch[0] : null

    if (info && name) {
      const whip = (info[2].includes('Whip'))

      // Espresso Con Panna has an extra category after whip...
      const kcal = name.includes('Espresso Con Panna')
        ? parseInt(info[4], 10)
        : parseInt(info[5].includes('mL') ? info[6] : info[5], 10)
      const drink: Drink = {
        name,
        size: info[0] as DrinkSize,
        milk: (info[1].includes('N/A') ? null : info[1]) as Milk,
        whip,
        kcal,
      }
      return drink
    }
  }
  return null
}
/* process menu file line by line, create drink object into array */
function readIn(): void {
  const arr: Drink[] = []
  lineReader.eachLine('./raw/normal_menu.txt', (line: string) => {
    const drink = generateDrink(line)
    if (drink) arr.push(drink)
  }, (err) => {
    if (err) throw err
    /* JSON store it in file */
    const data = JSON.stringify(arr)
    console.log('Drinks json generated from ./raw/normal_menu.txt')
    fs.writeFile('./data/drinks.json', data, () => {
      if (err) console.log(err)
    })
  })
}

// run stuff here
readIn()
