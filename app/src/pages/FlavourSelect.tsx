/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControlLabel, Grid, Container, Box,
} from '@mui/material'
import * as React from 'react'
import flavorJSON from '../assets/data/flavours.json'
import { ShotCounter } from '../components/ShotCounter'

const syrups: string[] = flavorJSON.map((i) => i.name)
// <Box sx={{
//   color: 'text.primary',
//   lineClamp: 2,
//   overflow: 'hidden',
//   display: '-webkit-box',
//   '-webkitBoxOrient': 'vertical',
//   '-webkitLinelamp': 3;
// }}
// >
export const FlavourSelect = (prop: { label: string }) => (
  <Container>
    <h3>{prop.label}</h3>
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12 }}
    >
      {syrups.map((name, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <FormControlLabel control={<ShotCounter />} label={{ name }} />
        </Grid>
      ))}
    </Grid>
  </Container>
)
