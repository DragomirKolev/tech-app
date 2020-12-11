import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {
  push,
  clear,
} from './playFieldSlice';

import { Input } from '../../components/input/Input';

export const RandomNumbersModal = () => {
    const dispatch = useDispatch();
    const [randomNumberCount, setRandomNumbercount] = useState(12);

    const dispatchNumber = (number: number) => dispatch(push(number));
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setRandomNumbercount(parseInt(e.currentTarget.value));
    const clearCurrent = () => dispatch(clear());

    return (
        <>
            <Input value={randomNumberCount} handleChange={onInputChange} type='number' label='Generate me: ' />
            <button onClick={() => {
                 clearCurrent();
                 getRandomNumbers(1, 80, dispatchNumber, randomNumberCount);
            }}> Numbers </button>
        </>
    );
}

const getRandomNumbers = ( 
    min: number, 
    max: number, 
    dispatchNumber: (number: number) => void,
    howMany?: number,
) => {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);
    const generated: Array<number> = [];

    do {
        const number = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        !generated.includes(number) && generated.push(number); dispatchNumber(number);
    } while (generated.length < (howMany || 12));
}
