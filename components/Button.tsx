import React from 'react';
import styles from './styles/Button.module.css';

interface ButtonProps {
    text?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    style ?: React.CSSProperties;
    children?: React.ReactNode;
};

const Button = ({ ... props} : ButtonProps) => {
    return (
        <button className={styles.button} type={props.type} style={props.style} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;