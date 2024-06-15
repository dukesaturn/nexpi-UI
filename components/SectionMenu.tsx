import Link from 'next/link'
import styles from './styles/SectionMenu.module.css'
import Typography from './Typography';
import React from 'react'

interface SectionMenuProps {
    style?: React.CSSProperties;
    NavItems: { name: string, path: string }[] | null | undefined;
    title ?: string;
}

const SectionMenu = ({ style, NavItems, title }: SectionMenuProps) => {
    
    return (
        <div className={styles.sectionmenuWrapper}>

        <nav style={style} className={styles.sectionmenu}>
        <Typography style={{color : 'var(--nxp-shadow-color)'}}>{title ? title : 'On this page' }</Typography>
            <ul>
                { NavItems && NavItems.map((item, index) => {

                    return (
                        item.path ? (
                            
                                <li key={index} style={{ listStyle: 'none' }}>
                                    <Link href={item.path} > {item.name}</Link>
                                    
                                </li>
                           
                        ) : (
                            <li key={index}>
                                {item.name}
                            </li>
                        )
                    );
                })}
            </ul>
        </nav>
        </div>
    );
}

const getChildSection =  (children : React.ReactNode, typeName : React.ElementType) => {
    const childData = React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === typeName) {
          return { name: child.props.id, path:'#' + child.props.id };
        }
        return null;
      })
      return childData;
}

export default SectionMenu;
export {getChildSection};