import React from 'react';
import { useSelector } from 'react-redux';

import { currencyFormatter } from '../../utils/formatting';
import { selectBet } from '../../features/bet/betSlice';
import { selectDraws} from '../../features/draws/drawsSlice';
import { selectPlayFieldSelected } from '../../features/playField/playFieldSlice';

export const Price = () => {    
    const bet = parseInt(useSelector(selectBet));
    const draws = useSelector(selectDraws) || 0;
    const playfieldSelected = useSelector(selectPlayFieldSelected);

    const value = bet * draws * playfieldSelected.length;
    const show = currencyFormatter.format(value);

    return (
        <div>Price: {show}</div>
    );
};