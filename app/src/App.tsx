/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import './App.scss'
import HomePage from './pages/homePage'
import { DrinkBase } from './pages/drinkMain'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

const ThemeBtn = () => {
  const colorMode = React.useContext(ColorModeContext)
  const theme = useTheme()

  return (
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default function ToggleColorMode() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = React.useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light')

  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    },
  }),
  [])

  const theme = React.useMemo(
    () => createTheme({
      palette: { mode },
      typography: {
        // body1: {
        //   fontFamily: "'Open Sans', sans-serif",
        //   fontWeight: 400,
        //   fontSize: 16,
        //   color: 'red',
      },
    }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            width: 'inherit',
            height: 'inherit',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
          }}
        >
          <div className="titlebar">
            <h1>Drink Calculator</h1>
            <ThemeBtn />
          </div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/startDrink" exact component={DrinkBase} />
          </Switch>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
