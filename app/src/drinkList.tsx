/* eslint-disable react/prefer-stateless-function */
import React, { FC, Component, MouseEvent } from 'react';
import './App.css';
import drinkJSON from './assets/data/drinks.json';

type listProps = {
  list: Drink[]
}

export class DrinkList extends Component {
  render() {
    const list = drinkJSON;
    return (
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
  }
}

export default DrinkList;
