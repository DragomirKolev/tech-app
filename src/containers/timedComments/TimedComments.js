import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Comments } from '../../features/comments/Comments';
import { setComments } from '../../features/comments/commentsSlice';
import { selectPlayFieldSelected } from '../../features/playField/playFieldSlice';

import { getComments } from '../../API';
import { MemoTimer } from '../../components/timer/Timer';

export const TimedComments = () => {
    const dispatch = useDispatch();
    let [error, setError] = useState(null);
    const selectedNumbers = useSelector(selectPlayFieldSelected);

    const fetchComments = useCallback(() => {
         getComments()
            .then(c => {
                setError(null);
                dispatch(setComments(c));
            })
            .catch(e => setError(e));
    }, [dispatch]);

    useEffect(() => { 
        fetchComments(); 
    }, [fetchComments]);
    
    return (
        <div>
            <MemoTimer 
                startingFrom={10} 
                timerFunction={fetchComments}
                label='Comments will refresh in: '
            />
            {error?.message || <Comments selectedComments={selectedNumbers} />}
        </div>
    )
}