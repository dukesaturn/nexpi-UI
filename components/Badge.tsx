import styles from './styles/Badge.module.css';

interface BadgeProps {
    children: string;
    style ?: React.CSSProperties;
    backgroundColor ?: string;
    type ?: 'notice' | 'info' | 'success' | 'warning' | 'error';
}

const selectColor = (factory: 'notice' | 'info' | 'success' | 'warning' | 'error') => {
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
        default:
            return 'var(--nxp-cian)';
    }
}


const Badge = ({children, type, backgroundColor, style} : BadgeProps) => {
    return (
        <div className={styles.badge} style={{backgroundColor : selectColor(type ? type : 'notice'), ...style}}>
            {children}
        </div>
    )

}

export default Badge;