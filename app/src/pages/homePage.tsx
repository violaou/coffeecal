/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

export default class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-slide">
          <Link to="/startDrink">
            <Button variant="outlined" className="text-btn">start</Button>
          </Link>
        </div>
      </div>
    )
  }
}
