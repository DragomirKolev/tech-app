import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPlayFieldSelected,
  selectIsMaxReached,
  push,
  filter,
} from './playFieldSlice';

import { GameBoard } from '../../components/gameBoard/GameBoard.js'

export const PlayField = () => {
    const dispatch = useDispatch();
    const selectedNumbers = useSelector(selectPlayFieldSelected);
    const isMaxReached = useSelector(selectIsMaxReached);

    const isSelected = number => selectedNumbers.includes(number);
    const onButtonClick = number => dispatch(isSelected(number) ? filter(number) : push(number));

    return (
        <GameBoard 
            size={80} 
            onClick={onButtonClick}
            isButtonSelected={isSelected}
            selectedNumbers={selectedNumbers}
            isMaxReached={isMaxReached} 
        />
    );
}
