"use client";
import styles from './styles/Switch.module.css';
import { useEffect, useState } from 'react';
import React from 'react';

interface SwitchProps {
    callBackSwitch: () => void;
    factory?: 'primary' | 'secondary' | 'notice' | 'warning' | 'error' | 'success' | 'info';
}

const Switch = ({ callBackSwitch, factory }: SwitchProps) => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);

        callBackSwitch();
    };

    useEffect(() => {
        handleToggle;
    }, [isOn])

    return (
        <>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked={isOn}
                    onChange={handleToggle}
                />
                <span className={`${styles.slider} ${styles.round} ${styles[factory ? factory : 'secondary']}`}></span>
            </label>
        </>
    );
};

export default Switch;