import Textfield from './Textfield';
import Button from './Button';
import Box from './Box';
import Dropdown from './Dropdown';
import * as Icons from 'react-icons/fa';

interface DropdownProps {
    menuItems: { name: string, icon: string, path?: string, callback?: () => void }[];
    style?: React.CSSProperties;
}

const Toolbar = ({ ...props }: DropdownProps) => {
    return (
        <Box style={{ border: '1px solid', display: 'flex', flexDirection: 'row-reverse', backgroundColor: 'var(--primary-color)' }}>

            <Dropdown menuItems={props.menuItems} onItemClick={props.onItemClick} />
            <Box style={{ display: 'inline-block', margin: '0.7rem', backgroundColor: 'var(--primary-color)' }} >
                <Textfield placeholder='Search' />
            </Box>


        </Box>
    );
}

export default Toolbar;