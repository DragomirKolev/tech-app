
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Input } from '../../components/input/Input';
import { currencyFormatter } from '../../utils/formatting';
import { selectBet, setBet } from './betSlice';

export const Bet = () => {    
    const bet = useSelector(selectBet);
    const dispatch = useDispatch();
    
    const handleChange = e => {
        const userInput = e.target.value;
        if (userInput === '') { dispatch(setBet('')); return; }
        
        const [whole, decimal] = userInput.split('.');
        const wholeNum = Math.max(0, parseFloat(whole));
        const newBet = decimal
            ? `${wholeNum}.${decimal.substr(0, 2)}`
            : wholeNum.toString();

        dispatch(setBet(newBet));
    }
    
    const confirmation = currencyFormatter.format(bet);

    return (
        <Input 
            label='Bet'
            type='number'
            value={bet}
            // Bonus 1 can be done using the step in input 
            step='0.20' // adds native browser buttons to the input (using up and down arrow keys on keyboard also works)
            handleChange={handleChange}
            footer={confirmation}
        />
    );
}
