import styles from './styles/SideBar.module.css';
import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fa';
import Link from 'next/link';

interface SideBarProps {
    style?: React.CSSProperties;
    NavItems: { name: string, icon: string, path: string }[];
    header?: string;
    logo?: string;
    children?: React.ReactNode;
}

const getIconByName = (name: string): IconType | null => {
    const IconComponent = (Icons as any)[name];
    return IconComponent || null;
}

const SideBar = ({ style, NavItems, header, logo, children }: SideBarProps) => {
    return (
        <nav style={style} className={styles.nav}>
            {children && <div>{children}</div>}
            <ul>
                {NavItems.map((item, index) => {
                    const IconComponent = getIconByName(item.icon);
                    return (
                        item.path ? (
                            <Link href={item.path}>
                                <li key={index} style={{ listStyle: 'none' }}>
                                    {IconComponent && <IconComponent style={{ marginLeft: '1.5rem', marginRight: '1rem' }} />}
                                    {item.name}
                                </li>
                            </Link>
                        ) : (
                            <li key={index}>
                                {IconComponent && <IconComponent style={{ marginLeft: '1.5rem', marginRight: '1rem' }} />}
                                {item.name}
                            </li>
                        )
                    );
                })}
            </ul>
        </nav>
    );
}

export default SideBar;