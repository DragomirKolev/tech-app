import React from 'react';
import { PlayField } from './features/playField/PlayField';
import { Bet } from './features/bet/Bet';
import { Draws } from './features/draws/Draws';
import { Price } from './containers/price/Price';
import { DrawTimer } from './containers/drawTimer/DrawTimer'
import './App.css';

export const App = () => {
  return (
    <div className="App">
        <PlayField />
        <Bet />
        <Draws />
        <Price />
        <DrawTimer />
    </div>
  );
}
