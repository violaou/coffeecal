/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField } from '@mui/material';
import * as React from 'react';
import drinkJSON from '../assets/data/drinks.json';

const list = drinkJSON;
const drinkNames = list.map((drink) => drink.name);

export const DrinkList = () => (
  <div className="App">
    <div className="app-slide">
      <h1>Pick a Drink:</h1>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={drinkNames}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Drinks" />}
      />
      {list.map((drink, index) => (
        <div key={`${drink.name}+${index}`}>
          {/* {`name: ${drink.name} `} */}
          {/* {`size: ${drink.size} `}
          {`whip: ${drink.whip} `}
          {`milk: ${drink.milk} `}
          {`kcal: ${drink.kcal} `} */}
        </div>
      ))}
    </div>
  </div>
);
