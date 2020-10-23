import React from 'react';
import { PlayField } from './features/playField/PlayField';
import { Bet } from './features/bet/Bet';
import { Draws } from './features/draws/Draws';
import { Price } from './containers/price/Price';
import { TimedComments } from './containers/timedComments/TimedComments';
import './App.css';

export const App = () => {
  return (
    <div className="App">
        <PlayField />
        <Bet />
        <Draws />
        <Price />
        <TimedComments />
    </div>
  );
}
