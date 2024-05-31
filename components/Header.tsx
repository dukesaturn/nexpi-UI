import styles from './styles/Header.module.css';
import Typography
 from './Typography';
interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Header = ({ ...props }: HeaderProps) => {
    return <div className={styles.header} {...props}> <Typography type='h1'>{props.children} </Typography></div>;
};

export default Header;