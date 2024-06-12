"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles/Dropdown.module.css';
import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fa';
import Separator from './Separator';
import Link from 'next/link';

type MenuItem = { name: string; icon: string; callback?: () => void; } | { comp: React.ReactElement; };

interface DropdownProps {
    menuItems: MenuItem[];
    style?: React.CSSProperties;
    clickIconColor?: string;
    iconsColor?: string;
    className?: string;
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
        <div className={styles.dropdown} ref={dropdownRef}>
            <div style={props.style}  onClick={() => setIsOpen(!isOpen)}>
                {TriggerIcon && <TriggerIcon style={{ margin: 0 }} size={25} color={props.clickIconColor ? props.clickIconColor : 'var(--nxp-secondary-color)'} />}            </div>
            {isOpen && (
                <div style={props.style}  className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
                    <ul>
                        {props.menuItems.map((item, index) => {
                            if ('comp' in item) {
                                if (React.isValidElement(item.comp)) {
                                    return item.comp;
                                }
                            } else {
                                const IconComponent = getIconByName(item.icon);
                                return (
                                    <li key={index} onClick={item.callback}>
                                        {IconComponent && <IconComponent color={props.iconsColor ? props.iconsColor : 'var(--nxp-primary-color)'} />} {item.name}
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;