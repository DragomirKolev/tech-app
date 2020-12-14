import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  push,
  clear,
  selectPlayFieldSelected,
} from './playFieldSlice';

import { Input } from '../../components/input/Input';

export const RandomNumbersModal = () => {
    const dispatch = useDispatch();
    const [randomNumberCount, setRandomNumbercount] = useState<number>(12);
    const dispatchNumber = (number: number) => dispatch(push(number));
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setRandomNumbercount(parseInt(e.currentTarget.value) || 0);
    return (
        <Grid>
            <Input 
                value={randomNumberCount.toString()}
                handleChange={onInputChange} 
                type='number' 
                label='Generate: '
                footer={
                    randomNumberCount !== 0 && <button onClick={() => {
                    dispatch(clear());
                    getRandomNumbers(1, 80, dispatchNumber, randomNumberCount);
                }}> Numbers </button>
               } 
            />
            
        </Grid>
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
    const generatedNumberCount = (howMany && howMany < 12 && howMany) || 12;

    do {
        const number = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        if(!generated.includes(number)) { generated.push(number); dispatchNumber(number); }
    } while (generated.length < generatedNumberCount);
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 40% 20%;
    grid-gap: 20px;
`