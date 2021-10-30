/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField, Container } from '@mui/material';
import * as React from 'react';

const milkOptions: string[] = ['Soy Beverage', 'Coconut Beverage', 'Nonfat', 'Oat Beverage', 'Whole', '2%', 'Lactose Free Beverage', 'Breve (Half & Half)', 'Heavy Cream', 'Almond Beverage'];

export const MilkSelect = (prop: { label: string }) => (
  <Container>
    <h3>{prop.label}</h3>
    <Autocomplete
      disablePortal
      selectOnFocus
      disableClearable
      autoComplete
      options={milkOptions}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Milk" />}
    />
  </Container>
);
