import Textfield from './Textfield';
import Button from './Button';
import Box from './Box';
import Dropdown from './Dropdown';
import * as Icons from 'react-icons/fa';
import Search from './Search';

type MenuItem = { name: string; icon: string; callback?: () => void; } | { comp: React.ReactElement; };

interface DropdownProps {
    menuItems?: MenuItem[];
    style?: React.CSSProperties;
    liteTheme ?: boolean;
    isDropDown ?: boolean;
}

interface SearchProps {
    onSearch: (searchText: string) => void;
    onClick ?: () => void;
    factory?: 'primary' | 'void';
    placeholder ?: string;
}

const Toolbar = ({ menuItems, style,isDropDown, onSearch, onClick }: DropdownProps & SearchProps) => {
    return (
        <Box style={{ border: 'none', display: 'flex', flexDirection: 'row-reverse' }}>
            {isDropDown && menuItems ? 
                <Dropdown menuItems={menuItems} />
                : null
            }
            <Search factory={'void'} onClick={onClick} onSearch={onSearch} />
        </Box>
    );
}


export default Toolbar;