/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField } from '@mui/material';
import * as React from 'react';

const sizes: DrinkSize[] = ['Short', 'Tall', 'Grande', 'Venti', 'Trenta', 'Solo', 'Doppio', 'Triple', 'Quad'];

export const SizeSelect = () => (
  <Autocomplete
    disablePortal
    selectOnFocus
    disableClearable
    autoComplete
    options={sizes}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Size" />}
  />
);
