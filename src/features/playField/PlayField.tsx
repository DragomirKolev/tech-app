import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPlayFieldSelected,
  selectIsMaxReached,
  push,
  filter,
} from './playFieldSlice';

import { GameBoard } from '../../components/gameBoard/GameBoard'
import {RandomNumbersModal } from './RandomNumbers';

export const PlayField = () => {
    const dispatch = useDispatch();
    const selectedNumbers = useSelector(selectPlayFieldSelected);
    const isMaxReached = useSelector(selectIsMaxReached);
    const isSelected = (number: number) => selectedNumbers.includes(number);
    const handleButtonClick = (number: number) => dispatch(isSelected(number) ? filter(number) : push(number));

    return (
        <>
            <RandomNumbersModal />
            <GameBoard 
                size={80} 
                handleButtonClick={handleButtonClick}
                isButtonSelected={isSelected}
                isMaxReached={isMaxReached} 
            />
        </>
    );
}