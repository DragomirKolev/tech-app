import React, { useState } from 'react';
import styled from 'styled-components';

interface GameBoardProps {
    size: number,
    isMaxReached: boolean,
    handleButtonClick: (idx: number) => void,
    isButtonSelected: (idx: number) => boolean,
}

export const GameBoard: React.FC<GameBoardProps> = ({ 
    size, isMaxReached, handleButtonClick, isButtonSelected 
}) => {
    const [board] = useState(Array.from(Array(size || 10)));
    const gameBoard = board.map((_, i) => {
        const currNumber = i+1;
        const isSelected = isButtonSelected && isButtonSelected(currNumber);
        return (
            <Button key={i}
                disabled={isMaxReached && !isSelected}
                isSelected={isSelected}
                onClick={() => handleButtonClick && handleButtonClick(currNumber)}>
                    {currNumber}
            </Button>
        );
    });

    return (
        <Grid>{gameBoard}</Grid>
    );
}

const Grid = styled.div`
    display: grid;
    max-width: 800px; 
    min-width: 360px;
    grid-template-columns: repeat(10, minmax(25px, 75px));
    grid-auto-rows: 75px;
    grid-gap: 5px;
    place-self: center;
`

interface ButtonProps {
    isSelected: boolean,
};

const Button = styled.button<ButtonProps>`
 ${props => props.isSelected && "background-color: green;"}
`
