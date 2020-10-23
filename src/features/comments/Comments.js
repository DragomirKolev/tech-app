import React from 'react';
import { useSelector } from 'react-redux';
import { selectComments } from './commentsSlice';
import styles from './Comments.module.css';

export const Comments = ({ selectedComments }) => {
    const comments = useSelector(selectComments);
    const isPartOfSelected = number => selectedComments.includes(number);
    const list = renderComments(comments, isPartOfSelected, 10);

    return (
        <div className={styles.list}>{list}</div>
    );
}

const renderComments = (comments, isPartOfSelected, limit) => {
    return comments
        .slice(0, limit) // get only the comments that we need
        .sort((c1, c2) => c1.id - c2.id) // order them by ID
        .map(({name}, idx) =>
            <div key={idx} className={isPartOfSelected(idx+1) ? styles.selectedComment : ''}>{name}</div>
        );
}
