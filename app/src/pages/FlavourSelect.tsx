/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import * as React from 'react';
import flavorJSON from '../assets/data/flavours.json';

const syrups: string[] = flavorJSON.map((i) => i.name);

export const FlavourSelect = () => (
  <FormGroup>
    {syrups.map((name) => <FormControlLabel control={<Checkbox />} label={name} />)}
  </FormGroup>
);
