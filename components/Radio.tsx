"use client";
import styles from './styles/Radio.module.css';
import { useState } from 'react';
import React from 'react';

interface RadioElement {
    value: string;
    label: string;
    name: string;
}

interface RadioProps {
    options: RadioElement[];
}


const Radio = ({ options }: RadioProps) => {

    const [selected, setSelected] = useState<string | null>(null);

    return (
        options.map((option, index) => (
            <div key={index} className={styles.radio}>
                <input type="radio" id={option.value} name={option.name} value={option.value} checked={selected === option.value} onChange={() => setSelected(option.value)} />
                <label style={{fontSize : '13px'}} htmlFor={option.value}>{option.value}</label>
            </div>
        )));
};

export default Radio;
