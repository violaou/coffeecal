/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

interface Props {
  default: number
}

export const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        aria-label="less"
        size="small"
        onClick={() => {
          setCount(count > 0 ? count - 1 : 0);
        }}
      >
        <ArrowCircleDownTwoToneIcon fontSize="inherit" />
      </IconButton>
      {count}
      <IconButton
        aria-label="more"
        size="small"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <ArrowCircleUpTwoToneIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};
