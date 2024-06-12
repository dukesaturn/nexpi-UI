import styles from './styles/WarningBox.module.css';
import { FaRegBell, FaRegQuestionCircle, FaRegCheckCircle, FaExclamationTriangle, FaRegTimesCircle } from 'react-icons/fa';

interface WarningBoxProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    factory?: 'notice' | 'info' | 'success' | 'warning' | 'error';
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

const iconMap = {
    notice: <FaRegBell size={30} />,
    info: <FaRegQuestionCircle size={30} />,
    success: <FaRegCheckCircle size={30}  />,
    warning: <FaExclamationTriangle size={30} />,
    error: <FaRegTimesCircle size={30}  />,
};


const WarningBox = ({ ...props }: WarningBoxProps) => {
    if (!props.factory) {
        props.factory = 'notice';
    }

    const Icon = iconMap[props.factory];

    return <div className={styles.card} style={{ backgroundColor: selectColor(props.factory) }} {...props}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom : '1.2rem' }}>
            {Icon}
        </div>
            {props.children}
    </div>
};

        export default WarningBox;