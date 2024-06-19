import styles from './styles/Checkbox.module.css';

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style ?: React.CSSProperties;
}

const Checkbox = ({ label, checked, onChange, style } : CheckboxProps) => {
    return (
        <div>
            <input style={style} className={styles.input} type="checkbox" checked={checked} onChange={onChange} />
            <label style={{color : 'var(--nxp-primary-color)'}}>{label}</label>
        </div>
    );
}

export default Checkbox;