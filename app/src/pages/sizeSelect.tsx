/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField, Container } from '@mui/material'
import * as React from 'react'

const sizes: DrinkSize[] = ['Short', 'Tall', 'Grande', 'Venti', 'Trenta', 'Solo', 'Doppio', 'Triple', 'Quad']

export const SizeSelect = (prop: { label: string }) => (
  <Container>
    <h3>{prop.label}</h3>
    <Autocomplete
      disablePortal
      selectOnFocus
      disableClearable
      autoComplete
      options={sizes}
      defaultValue={sizes[2]}
      renderInput={(params) => <TextField {...params} label="Size" />}
    />
  </Container>
)
