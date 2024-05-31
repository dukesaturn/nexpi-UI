import styles from './styles/Spinner.module.css';

interface SpinnerProps {
    style?: React.CSSProperties;
}
const Spinner = ({style} : SpinnerProps) => {
    return (
        <div style={style} className={styles.spinner}>
        </div>
    );
    }

export default Spinner;