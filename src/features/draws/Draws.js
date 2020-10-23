
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Input } from '../../components/input/Input';
import {
  selectDraws,
  setDraws,
} from './drawsSlice';

export function Draws() {    
    const draws = useSelector(selectDraws);
    const dispatch = useDispatch();

    const handleChange = e => {
        const userInput = e.target.value;
        if (userInput === '') { dispatch(setDraws('')); return; }
        dispatch(setDraws(Math.max(0, parseInt(userInput))));
    }
    
    return (
        <Input 
            label='Draws'
            type='number'
            value={draws.toString()}
            // Bonus 1 can be done using the step in input 
            step='1' // adds native browser buttons to the input (using up and down arrow keys on keyboard also works)
            handleChange={handleChange}
        />
    );
}
