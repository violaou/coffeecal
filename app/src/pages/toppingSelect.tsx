/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import * as React from 'react';
import toppingJSON from '../assets/data/toppings.json';

const toppings: string[] = toppingJSON.map((i) => i.name);

export const ToppingSelect = () => (
  <FormGroup>
    <FormControlLabel control={<Checkbox />} label="Whip" />
    {toppings.map((name) => <FormControlLabel control={<Checkbox />} label={name} />)}
  </FormGroup>
);
