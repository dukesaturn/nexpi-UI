import styles from './styles/Header.module.css';
import Typography
    from './Typography';
import Separator from './Separator';

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Header = ({ ...props }: HeaderProps) => {
    return (
        <div className={styles.header} {...props}>
            <Separator style={{
                background: 'linear-gradient(to right, var(--nxp-background-color), var(--nxp-shadow-color), var(--nxp-background-color))',
                borderTop: 'none'
            }} />
            <Typography type='h1'>{props.children}</Typography>
            <Separator style={{
                background: 'linear-gradient(to right, var(--nxp-background-color), var(--nxp-shadow-color), var(--nxp-background-color))',
                borderTop: 'none'
            }} />
        </div>
    )
};

export default Header;