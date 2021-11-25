/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Container, Stack, Divider } from '@mui/material';
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
      <Stack
        direction="row"
        spacing={4}
        sx={{ paddingBottom: '32px' }}
      >
        <SizeSelect label="Size?" />
        <MilkSelect label="Milk?" />
      </Stack>
      <SweetsSelect label="Sweeteners:" />
      <FlavourSelect label="Flavours:" />
      <ToppingSelect label="Toppings:" />
    </Stack>
  </Container>
);
