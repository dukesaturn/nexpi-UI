"use client";
import styles from './styles/Select.module.css';
import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

interface option {
    value: string;
    label: string;
}
interface SelectProps {
    options: option[];
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, value, onChange }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(value);

    const handleSelect = (value: string) => {
        setSelected(value);
        setIsOpen(false);
        if(onChange) onChange({ target: { value } } as React.ChangeEvent<HTMLSelectElement>);
        
    };

    return (
        <div className={styles.select}>
            <div onClick={() => setIsOpen(!isOpen)} className={styles.selectHeader}>
                {selected ? options.find(option => option.value === selected)?.label : "Select an option"}
                <FaArrowDown />
            </div>
            {isOpen && (
                <div className={styles.selectMenu}>
                    <ul>
                        {options.map((item, index) => (
                            <li key={index} onClick={() => handleSelect(item.value)}>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Select;
