"use client";
import styles from './styles/Switch.module.css';
import { useEffect, useState } from 'react';

interface SwitchProps {
    callBackSwitch: () => void;
}

const Switch = ({ callBackSwitch }: SwitchProps) => {
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
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </>
    );
};

export default Switch;