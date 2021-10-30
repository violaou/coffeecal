/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField, Container } from '@mui/material';
import * as React from 'react';
import drinkJSON from '../assets/data/drinks.json';

let fraps: string[];
let coffee: string[];
let tea: string[];
let hotDrinks: string[];
let coldCoffee: string[];
let coldTea: string[];
let coldDrinks: string[];

function sortAlphabetically(strList: string[]) {
  return strList.sort((a, b) => -b.localeCompare(a));
}

function sortCategories(drinkNames: string[]): string[] {
  // blended beverage
  fraps = sortAlphabetically(drinkNames.filter((name) => name.includes('Blended')));
  // iced and cold
  coldCoffee = sortAlphabetically(drinkNames.filter((name) => (name.includes('Cold Brew')
    || name.includes('Iced Caffè Americano')
    || name.includes('Nitro')
    || (name.includes('Iced') && name.includes('Coffee'))
    || name.includes('Shaken Espresso')
    || (name.includes('Iced') && name.includes('Flat White'))
    || (name.includes('Iced') && !name.includes('Tea') && name.includes('Latte'))
    || (name.includes('Iced') && name.includes('Macchiato'))
    || (name.includes('Iced') && name.includes('Mocha')))
  && !name.includes('Blended')));

  coldTea = sortAlphabetically(drinkNames.filter((name) => (name.includes('Iced')
    && name.includes('Tea')) && !name.includes('Blended')));

  coldDrinks = sortAlphabetically(drinkNames.filter((name) => (name.includes('Refreshers')
    || name.includes('Milk')
    || name.includes('Lemonade'))
    && !name.includes('Blended')
    && !name.includes('Iced')
    && !name.includes('Tea')
    && !name.includes('Steamed')));

  // hot
  coffee = sortAlphabetically(drinkNames.filter((name) => !name.includes('Iced') && !name.includes('Cold') && !name.includes('Tea') && !name.includes('Blended') && (name.includes('Brewed Coffee')
    || name.includes('Caffè')
    || name.includes('Caffè Americano')
    || name.includes('Cappucino')
    || name.includes('Espresso Con Panna')
    || name.includes('Flat White')
    || (name === 'Espresso')
    || name.includes('Latte')
    || name.includes('Macchiato')
    || name.includes('Mocha'))));
  tea = sortAlphabetically(drinkNames.filter((name) => !name.includes('Iced') && !name.includes('Blended') && (name.includes('Tea')
    || name.includes('Mint')
    || name.includes('Tranquility'))));
  hotDrinks = sortAlphabetically(drinkNames.filter((name) => name.includes('Hot Chocolate')
      || name.includes('Steam')
      || name.includes('Cremè')));

  const res = fraps.concat(coffee, tea, hotDrinks, coldCoffee, coldTea, coldDrinks);
  return res;
}

function categories(drink: string): string {
  if (fraps.includes(drink)) {
    return 'Frappuccinos';
  } else if (coffee.includes(drink)) {
    return 'Hot Coffee';
  } else if (tea.includes(drink)) {
    return 'Hot Tea';
  } else if (hotDrinks.includes(drink)) {
    return 'Hot Drinks';
  } else if (coldCoffee.includes(drink)) {
    return 'Cold Coffee';
  } else if (coldTea.includes(drink)) {
    return 'Cold Tea';
  } else if (coldDrinks.includes(drink)) {
    return 'Cold Drinks';
  }
  return 'Other Drinks';
}

const list = drinkJSON;
const uniqueNames = sortCategories(Array.from(
  new Set(list.map((drink) => drink.name)),
));

export const DrinkList = (label?: { label: string }) => (
  <Container>
    <h3>{label}</h3>
    <Autocomplete
      disablePortal
      selectOnFocus
      disableClearable
      autoComplete
      className="drink-label"
      id="combo-box-demo"
      options={uniqueNames}
      groupBy={categories}
      renderInput={(params) => <TextField {...params} label="" />}
    />
  </Container>
);
