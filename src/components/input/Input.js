
import React from 'react';
import styles from './Input.module.css';

export const Input = ({label, type, value, step, handleChange, footer}) => (
    <div className={styles.inputContainer}>
        {label && <div>{label}</div>}
        <input type={type}
            value={value}
            step={step}
            onChange={e => handleChange(e)}
        />
        {footer && <div>{footer}</div>}
    </div>
);
