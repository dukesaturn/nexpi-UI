import React from 'react';
import styles from './styles/Box.module.css';

interface BoxProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const Box = ({ ...props }: BoxProps) => {
    return (
    <div style={props.style} className={styles.Box}>
        {props.children}
    </div>
    );
}

export default Box;