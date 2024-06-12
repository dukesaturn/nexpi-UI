import styles from './styles/Typography.module.css';

interface TypographyProps {
    children: React.ReactNode;
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "light";
    style ?: React.CSSProperties;
}

const Typography = ({ children, type, style }: TypographyProps) => {
    return type === "h1" ? <h1 style={style} className={styles.h1}>{children}</h1> :
           type === "h2" ? <h2 style={style} className={styles.h2}>{children}</h2> :
           type === "h3" ? <h3 style={style} className={styles.h3}>{children}</h3> :
           type === "h4" ? <h4 style={style} className={styles.h4}>{children}</h4> :
           type === "h5" ? <h5 style={style} className={styles.h5}>{children}</h5> :
           type === "h6" ? <h6 style={style} className={styles.h6}>{children}</h6> :
           type === 'light' ? <p style={style}  className={styles.abstract}>{children}</p> :
           <p style={style} className={styles.p}>{children}</p>;
}

export default Typography;