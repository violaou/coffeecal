/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { DrinkList } from './drinkList';
import { FlavourSelect } from './FlavourSelect';
import { MilkSelect } from './milkSelect';
import { SizeSelect } from './sizeSelect';
import { SweetsSelect } from './sweetSelect';
import { ToppingSelect } from './toppingSelect';

export const DrinkBase = () => (
  <div className="App">
    <h3>Select a Drink:</h3>
    <DrinkList />
    <h3>Select a Size:</h3>
    <SizeSelect />
    <h3>Select a Milk:</h3>
    <MilkSelect />
    <h3>Sweeteners:</h3>
    <SweetsSelect />
    <h3>Flavours:</h3>
    <FlavourSelect />
    <h3>Toppings:</h3>
    <ToppingSelect />
  </div>
);
