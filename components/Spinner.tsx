import styles from './styles/Spinner.module.css';
import React from 'react';

interface SpinnerProps {
    style?: React.CSSProperties;
    factory?: 'notice' | 'info' | 'success' | 'warning' | 'error' | 'void' | 'primary' | 'secondary';
}

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

const Spinner = ({style, factory} : SpinnerProps) => {
    return (
        <div style={{...style, borderTop : '4px solid ' + selectColor(factory ? factory : 'secondary')}} className={styles.spinner}>
        </div>
    );
    }

export default Spinner;