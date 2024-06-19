import styles from './styles/Separator.module.css';

interface SeparatorProps {
    style?: React.CSSProperties;
}

const Separator = ({ style, ...props }: SeparatorProps) => {
    return <hr className={styles.hr} style={{ flexGrow: 1, ...style }} {...props} />;
};
export default Separator;