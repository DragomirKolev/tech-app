import React from 'react';
import { MemoTimer } from '../../components/timer/Timer';

export const DrawTimer = () => {
    const youNeverHadAChance = () => console.log('you lost lol');

    return (
        <MemoTimer 
            startingFrom={180}
            timerFunction={youNeverHadAChance}
            label='Next draw: '
        />
    )
}