"use client";
import styles from './styles/SideBar.module.css';
import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';
interface NavItem {
    name: string;
    icon: string;
    path: string;
    subItems?: NavItem[];
}

interface SideBarProps {
    style?: React.CSSProperties;
    NavItems: NavItem[];
    children?: React.ReactNode;
}

const getIconByName = (name: string): IconType | null => {
    const IconComponent = (Icons as any)[name];
    return IconComponent || null;
}

const SideBar = ({ style, NavItems, children }: SideBarProps) => {

    const [mouse, setMouse] = useState<boolean[]>([]);
    const handleItemClick = (index: number) => {
        const newMouse = [...mouse];
        newMouse[index] = !newMouse[index]
        setMouse(newMouse);
    };


    return (
        <nav style={style} className={styles.nav}>
            {children && <div>{children}</div>}
            <ul>
                {NavItems.map((item, index) => {
                    const IconComponent = getIconByName(item.icon);
                    return (
                        <li
                            key={index}
                            style={{ listStyle: "none" }}
                            onClick={() => {
                                if (item.path === 'child' && item.subItems !== undefined)
                                    handleItemClick(index)
                            }
                            } className={item.path === 'child' && item.subItems !== undefined ? styles.parent : styles.li}
                        >
                            {
                                item.path !== 'child' ?
                                    (<Link href={item.path}>
                                        {IconComponent && (
                                            <IconComponent
                                                style={{
                                                    marginLeft: "1.5rem",
                                                    marginRight: "1rem",
                                                }}
                                            />
                                        )}
                                        {item.name}

                                    </Link>)
                                    :

                                    (<>
                                        {IconComponent && (
                                            <IconComponent
                                                style={{
                                                    marginLeft: "1.5rem",
                                                    marginRight: "1rem",
                                                }}
                                            />
                                        )}
                                        {item.name}
                                        {
                                            mouse[index] ? <FaChevronUp
                                                style={{
                                                    marginLeft: "1.5rem",
                                                    marginRight: "1rem",
                                                }} />
                                                :
                                                <FaChevronDown
                                                    style={{
                                                        marginLeft: "1.5rem",
                                                        marginRight: "1rem",
                                                    }} />
                                        }


                                        {
                                            mouse[index] && item.subItems && item.path === "child" && (
                                                <ul style={{ marginTop: '1rem' }}>
                                                    {item.subItems.map((subItem, subIndex) => {
                                                        const subIconComponent = getIconByName(subItem.icon);
                                                        return subItem.path ? (
                                                            <li key={subIndex} style={{ listStyle: "none" }}
                                                                className={styles.li}>
                                                                <Link href={subItem.path}>
                                                                    {IconComponent && (
                                                                        <IconComponent
                                                                            style={{
                                                                                marginLeft: "1.5rem",
                                                                                marginRight: "1rem",
                                                                            }}
                                                                        />
                                                                    )}
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ) : (
                                                            null
                                                        );
                                                    })}
                                                </ul>
                                            )
                                        } </>)
                            }



                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default SideBar;