import React from 'react';
import styled from 'styled-components';

export const Input: React.FC<Props> = ({ 
    handleChange, step, value, type, footer, label 
}) => (
    <InputContainer>
        {label && <div>{label}</div>}
        <input 
            type={type}
            value={value}
            step={step}
            onChange={e => handleChange(e)}
        />
        {footer && <div>{footer}</div>}
    </InputContainer>
);

interface Props {
    label?: string, 
    type: string, 
    value: string | number, 
    step?: string, 
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, 
    footer?: string | boolean | React.ReactElement,
}

const InputContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(70px, 100px) minmax(300px, 700px);
`