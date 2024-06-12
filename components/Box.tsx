import React from 'react';
import styles from './styles/Box.module.css';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

const Box = ({ children, style, ...props }: BoxProps) => {
    return (
        <div style={style} className={styles.Box} {...props}>
            {children}
        </div>
    );
}

export default Box;