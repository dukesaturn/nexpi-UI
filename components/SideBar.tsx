"use client";
import styles from './styles/SideBar.module.css';
import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fa';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from './Button';
import { NavItem } from './types';
import React from 'react';


interface SideBarProps {
  style?: React.CSSProperties;
  NavItems: NavItem[];
  children?: React.ReactNode;
}

const getIconByName = (name: string): IconType  => {
  const IconComponent = (Icons as any)[name];
  return IconComponent || null;
}

const SideBar = ({ style, NavItems, children }: SideBarProps) => {
  const [mouse, setMouse] = useState<boolean[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const handleItemClick = (index: number) => {
    const newMouse = [...mouse];
    newMouse[index] = !newMouse[index];
    setMouse(newMouse);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      {isMobile && (
        <Button factory='void' style={{border : 'none'}} onClick={toggleSidebar}>
          {sidebarVisible ? <FaTimes /> : <FaBars />}
        </Button>
      )}
      <nav
        style={style}
        className={`${styles.nav} ${isMobile ? (sidebarVisible ? styles.navVisible : styles.navHidden) : ''}`}
      >
        {children && <div>{children}</div>}
        <ul>
          {NavItems.map((item, index) => {
            
            const IconComponent = (item.icon ? getIconByName(item.icon) : null );
            return (
              <li
                key={index}
                style={{ listStyle: "none" }}
                onClick={() => {
                  if (item.path === 'child' && item.subItems !== undefined)
                    handleItemClick(index)
                }}
                className={item.path === 'child' && item.subItems !== undefined ? styles.parent : styles.li}
              >
                {item.path !== 'child' ? (
                  <Link href={item.path}>
                    {IconComponent && (
                      <IconComponent
                        style={{
                          marginLeft: "1.5rem",
                          marginRight: "1rem",
                        }}
                      />
                    )}
                    {item.name}
                  </Link>
                ) : (
                  <>
                    {IconComponent && (
                      <IconComponent
                        style={{
                          marginLeft: "1.5rem",
                          marginRight: "1rem",
                        }}
                      />
                    )}
                    {item.name}
                    {mouse[index] ? (
                      <FaChevronUp
                        style={{
                          marginLeft: "1.5rem",
                          marginRight: "1rem",
                        }}
                      />
                    ) : (
                      <FaChevronDown
                        style={{
                          marginLeft: "1.5rem",
                          marginRight: "1rem",
                        }}
                      />
                    )}
                    {mouse[index] && item.subItems && item.path === "child" && (
                      <ul style={{ marginTop: '1rem' }}>
                        {item.subItems.map((subItem, subIndex) => {
                          const SubIconComponent = (subItem.icon ? getIconByName(subItem.icon) : null );
                          return subItem.path ? (
                            <li key={subIndex} style={{ listStyle: "none" }} className={styles.li}>
                              <Link href={subItem.path}>
                                {SubIconComponent && (
                                  <SubIconComponent
                                    style={{
                                      marginLeft: "1.5rem",
                                      marginRight: "1rem",
                                    }}
                                  />
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
      </nav>
    </>
  );
};

export default SideBar;
