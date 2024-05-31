import styles from './styles/Logo.module.css';

interface ImgProps {
    src: string;
    alt?: string;
    style?: React.CSSProperties;
}

const Logo = ({... props} : ImgProps) => {
    return <img className={styles.img} {...props} />;
}

export default Logo;