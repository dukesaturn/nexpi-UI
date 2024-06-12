import React from 'react';
import styles from './styles/Button.module.css';

interface ButtonProps {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
    children?: React.ReactNode;
    factory?: 'primary' | 'secondary' | 'void';
};

const Button = ({ ...props }: ButtonProps) => {
    return (
        <button
            style={{
                backgroundColor: props.factory === 'primary' ? 'var(--nxp-primary-color)' 
                : props.factory === 'secondary' ? 'var(--nxp-secondary-color)'
                : props.factory === 'void' ? 'var(--nxp-backgruond-color)' : 'var(--nxp-secondary-color)',
                color: props.factory === 'void' ? 'var(--nxp-primary-color)' : 'var(--nxp-background-color)', 
                border: props.factory === 'void' ? '1px solid var(--nxp-primary-color)' : 'none',
                ...props.style
            }} className={styles.button} type={props.type} onClick={props.onClick}>{props.children}</button>
    );
}
export default Button;