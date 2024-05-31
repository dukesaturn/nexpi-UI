"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles/Dropdown.module.css';
import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fa';
import Separator from './Separator';
import Link from 'next/link';

interface DropdownProps {
    menuItems: { name: string, icon: string, path?: string, callback?: () => void }[];
    style?: React.CSSProperties;
}
const getIconByName = (name: string): IconType | null => {
    const IconComponent = (Icons as any)[name];
    return IconComponent || null;
}

const Dropdown: React.FC<DropdownProps> = ({ ...props }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const TriggerIcon = getIconByName('FaBars');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.dropdown} style={{ backgroundColor: 'var(--primary-color)' }} ref={dropdownRef}>
            <div style={props.style} style={{ marginRight: '1.5rem' }} onClick={() => setIsOpen(!isOpen)}>
                {TriggerIcon && <TriggerIcon style={{ margin: 0 }} size={25} color='var(--secondary-color)' />}            </div>
            {isOpen && (
                <div className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
                    <ul>
                        {props.menuItems.map((item, index) => {
                            const IconComponent = getIconByName(item.icon);
                            return (
                                <li key={index} onClick={item.callback}>
                                    {IconComponent && <IconComponent />} {item.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;