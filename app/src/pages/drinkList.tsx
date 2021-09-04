/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import drinkJSON from '../assets/data/drinks.json';

const list = drinkJSON;
export const DrinkList = () => (
  <div>
    {list.map((drink, index) => (
      <div key={`${drink.name}+${index}`}>
        {`name: ${drink.name}`}
        {`size: ${drink.size}`}
        {`whip: ${drink.whip}`}
        {`milk: ${drink.milk}`}
        {`kcal: ${drink.kcal}`}
      </div>
    ))}
  </div>
);
