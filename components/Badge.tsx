import React from 'react';
import styles from './styles/Badge.module.css';

interface BadgeProps {
    children: string;
    style?: React.CSSProperties;
    type?: 'notice' | 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary';
}

const selectColor = (factory: 'notice' | 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary') => {
    switch (factory) {
        case 'notice':
            return 'var(--nxp-cian)';
        case 'info':
            return 'var(--nxp-light-violet)';
        case 'success':
            return 'var(--nxp-light-green)';
        case 'warning':
            return 'var(--nxp-yellow)';
        case 'error':
            return 'var(--nxp-light-red)';
        case 'primary':
            return 'var(--nxp-primary-color)';
        case 'secondary':
            return 'var(--nxp-secondary-color)';
        default:
            return 'var(--nxp-cian)';
    }
}


const Badge = ({ children, type, style }: BadgeProps) => {
    return (
        <div className={styles.badge} style={{ backgroundColor: selectColor(type ? type : 'notice'),
        color : type === 'primary' || type === 'secondary' ? 'var(--nxp-background-color)' : 'black',
         ...style }}>
            {children}
        </div>
    )

}

export default Badge;