/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Checkbox, FormControlLabel, Grid, Container,
} from '@mui/material'
import * as React from 'react'
import toppingJSON from '../assets/data/toppings.json'
import { ShotCounter } from '../components/ShotCounter'

const toppings: string[] = toppingJSON.map((i) => i.name)

export const ToppingSelect = (prop: { label: string }) => (
  <Container>
    <h3>{prop.label}</h3>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
      {toppings.map((name, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <FormControlLabel control={<ShotCounter />} label={name} />
        </Grid>
      ))}
    </Grid>
  </Container>
)
