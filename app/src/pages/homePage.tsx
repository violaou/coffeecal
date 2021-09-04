/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-slide">
          <h3>CoffeeCal</h3>
          <Link to="/startDrink">
            <p className="text-btn">start</p>
          </Link>
        </header>
      </div>
    );
  }
}
