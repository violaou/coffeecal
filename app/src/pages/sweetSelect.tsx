/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import * as React from 'react';
import sweetsJSON from '../assets/data/sweeteners.json';

const sweets: string[] = sweetsJSON.map((i) => i.name);

export const SweetsSelect = () => (
  <FormGroup>
    {sweets.map((name) => <FormControlLabel control={<Checkbox />} label={name} />)}
  </FormGroup>
);
