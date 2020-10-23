import React, { useState } from 'react';
import styles from './GameBoard.module.css';

export const GameBoard = ({ size, isMaxReached, handleButtonClick, isButtonSelected }) => {
    const [board] = useState(Array.from(Array(size || 10)));
    const gameBoard = loadGameBoard(board, isButtonSelected, isMaxReached, handleButtonClick);

    return (
        <div className={styles.grid}>{gameBoard}</div>
    );
}

// this can be extracted to a component to render a board but I've left it here for readability
const loadGameBoard = (board, isBtnSelected, isMaxReached, handleButtonClick) => {
    return board.map((_, i) => {
        const currNumber = i+1;
        const isSelected = isBtnSelected && isBtnSelected(currNumber);
            return (
                <button key={i}
                    className={isSelected ? styles.btnSelected : ''}
                    disabled={isMaxReached && !isSelected}
                    onClick={() => handleButtonClick && handleButtonClick(currNumber)}>
                        {currNumber}
                </button>
            );
        }
    );
}
