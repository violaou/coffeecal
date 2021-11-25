/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Checkbox, FormControlLabel, Grid, Container,
} from '@mui/material';
import * as React from 'react';
import sweetsJSON from '../assets/data/sweeteners.json';
import { ShotCounter } from '../components/ShotCounter';

const sweets: string[] = sweetsJSON.map((i) => i.name);

export const SweetsSelect = (prop: { label: string }) => (
  <Container>
    <h3>{prop.label}</h3>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
      {sweets.map((name, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <FormControlLabel
            control={<ShotCounter />}
            label={name}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);
