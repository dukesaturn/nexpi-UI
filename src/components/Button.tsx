import React from 'react';
import styles from './styles/Button.module.css';

interface ButtonProps {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
    children?: React.ReactNode;
    factory?: 'notice' | 'info' | 'success' | 'warning' | 'error' | 'void' | 'primary' | 'secondary';
};

const selectColor = (factory: 'notice' | 'info' | 'success' | 'warning' | 'error' | 'void' | 'primary' | 'secondary') => {
    switch (factory) {
        case 'notice':
            return 'var(--nxp-blue)';
        case 'info':
            return 'var(--nxp-violet)';
        case 'success':
            return 'var(--nxp-green)';
        case 'warning':
            return 'var(--nxp-orange)';
        case 'error':
            return 'var(--nxp-red)';
        case 'void':
            return 'transparent';
        case 'primary':
            return 'var(--nxp-primary-color)';
        case 'secondary':
            return 'var(--nxp-secondary-color)';
        default:
            return 'var(--nxp-cian)';
    }
}

const Button = ({ ...props }: ButtonProps) => {
    return (
        <button
            style={{
                backgroundColor: selectColor(props.factory ? props.factory : 'secondary'),
                color: props.factory === 'void' ? 'var(--nxp-primary-color)'  : 
                (props.factory === 'primary' ? 'var(--nxp-background-color)' : 'white'),
                border: props.factory === 'void' ? '1px solid var(--nxp-primary-color)' : 'none',
                ...props.style
            }} className={styles.button} type={props.type} onClick={props.onClick}>{props.children}</button>
    );
}
export default Button;