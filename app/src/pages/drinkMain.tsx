/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  Container, Stack, Grid, Divider,
} from '@mui/material';
import { DrinkList } from './drinkList';
import { FlavourSelect } from './FlavourSelect';
import { MilkSelect } from './milkSelect';
import { SizeSelect } from './sizeSelect';
import { SweetsSelect } from './sweetSelect';
import { ToppingSelect } from './toppingSelect';

import './drinkMain.scss';

export const DrinkBase = () => (
  <Container maxWidth="md">
    <Stack spacing={4} divider={<Divider orientation="horizontal" flexItem />}>
      <DrinkList label="Select a Drink:" />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}><SizeSelect label="Size?" /></Grid>
        <Grid item xs={2} sm={4} md={4}><MilkSelect label="Milk?" /></Grid>
      </Grid>
      <SweetsSelect label="Sweeteners:" />
      <FlavourSelect label="Flavours:" />
      <ToppingSelect label="Toppings:" />
    </Stack>
  </Container>
);
