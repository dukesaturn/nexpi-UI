"use client";
import Box from './Box';
import Textfield from './Textfield';
import * as Icons from 'react-icons/fa';
import { useState } from 'react';

interface SearchProps {
    onSearch: (searchText: string) => void;
    onClick ?: () => void;
    factory?: 'primary' | 'void';
    placeholder ?: string;
}

const Search = ({ onSearch, factory, placeholder, onClick }: SearchProps) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);    };

    return (
        <Box onClick={onClick} style={{margin: '0.5rem', marginRight: '0', backgroundColor: factory === 'primary' ? 'var(--nxp-primary-color)' : 'trasparent', display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
            <Icons.FaSearch color='var(--nxp-secondary-color)' style={{ margin: '10px' }} onClick={handleSearch} />
            <Textfield  style={{ margin: '0',  borderRadius : '8px', backgroundColor : 'var(--nxp-secondary-shadow-color)' , border : 'none'}} placeholder={placeholder ? placeholder : 'Search'} value={searchText} onChange={e => setSearchText(e.target.value)} />
        </Box>
    );
}

export default Search;