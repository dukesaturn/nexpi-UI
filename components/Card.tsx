import styles from './styles/Card.module.css';
import React from 'react';


interface CardProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Card = ({ ...props }: CardProps) => {
    return <div className={styles.card} {...props}>{props.children}</div>;
};

export default Card;