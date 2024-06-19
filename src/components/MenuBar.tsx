"use client";
import styles from './styles/MenuBar.module.css';
import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fa';
import { FaChevronDown, FaChevronUp, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import Search from './Search';
import { NavItem } from './types';
import ThemeSwitch from '../projects/nexpi/Doc/Mocks/ThemeSwitch';

interface SideBarProps {
    logoPath?: string;
    style?: React.CSSProperties;
    NavItems: NavItem[];
    children?: React.ReactNode;
}

const getIconByName = (name: string): IconType | null => {
    const IconComponent = (Icons as any)[name];
    return IconComponent || null;
}

const MenuBar = ({ style, NavItems, children, logoPath }: SideBarProps) => {
    const [mouse, setMouse] = useState<boolean[]>([]);
    const [open, setOpen] = useState<boolean>(true);

    const handleItemClick = (index: number) => {
        const newMouse = [...mouse];
        newMouse[index] = !newMouse[index];
        setMouse(newMouse);
    };

    return (
        open ? (
            <div style={{
                borderBottom: '1px solid var(--nxp-secondary-shadow-color)'
            }}>


                <nav style={{ display: 'flex', justifyContent: 'space-between' }} className={styles.nav}>
                    {children && <div>{children}</div>}
                    <ul>
                        {logoPath ? <Logo alt='logo' src={logoPath} /> : null}
                        {NavItems.map((item, index) => {
                            const IconComponent = (item.icon ? getIconByName(item.icon) : null);
                            return (
                                <li
                                    key={index}
                                    className={item.path === 'child' && item.subItems ? styles.parent : styles.li}
                                    onClick={() => {
                                        if (item.path === 'child' && item.subItems) {
                                            handleItemClick(index);
                                        }
                                    }}
                                >
                                    {item.path !== 'child' ? (
                                        <Link href={item.path}>
                                            {IconComponent && (
                                                <IconComponent className={styles.icon} />
                                            )}
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <>
                                            {IconComponent && (
                                                <IconComponent className={styles.icon} />
                                            )}
                                            <b>{item.name}</b>

                                            {mouse[index] && item.subItems && item.path === 'child' && (
                                                <ul>
                                                    {item.subItems.map((subItem, subIndex) => {
                                                        const SubIconComponent =(subItem.icon ? getIconByName(subItem.icon) : null) ;
                                                        return subItem.path ? (
                                                            <li key={subIndex} className={styles.li}>
                                                                <Link href={subItem.path}>
                                                                    {SubIconComponent && (
                                                                        <SubIconComponent className={styles.icon} />
                                                                    )}
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ) : null;
                                                    })}
                                                </ul>
                                            )}
                                        </>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                    <div>
                        {/*<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Search />
                            <Link href='https://github.com/dukesaturn/nexpi-UI' >
                                <FaGithub style={{ fontSize: '32px', }} color='var(--nxp-primary-color)' />
                            </Link>
                    </div>*/}
                    </div>

                </nav> </div>
        ) : null
    );
};

export default MenuBar;
