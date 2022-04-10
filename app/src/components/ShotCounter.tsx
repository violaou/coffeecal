/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone'
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone'
import { styled } from '@mui/material/styles'

interface Props {
  default: number
}

const StyledDiv = styled('div')({
  padding: '10px',
  fontWeight: 'bold',
  fontSize: '1.17em',
})

export const ShotCounter = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
      <IconButton
        aria-label="less"
        size="medium"
        onClick={() => { setCount(count > 0 ? count - 1 : 0) }}
      >
        <ArrowCircleDownTwoToneIcon fontSize="inherit" />
      </IconButton>
      <StyledDiv>{count}</StyledDiv>
      <IconButton
        aria-label="more"
        size="medium"
        onClick={() => { setCount(count + 1) }}
      >
        <ArrowCircleUpTwoToneIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  )
}
