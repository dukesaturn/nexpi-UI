'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import Textfield from './Textfield';

interface SearchProps {
    onSearch: (searchText: string) => void;
    onClick?: () => void;
    factory?: 'primary' | 'void';
    placeholder?: string;
    searching: boolean;
}

const Search = ({ onSearch, factory, placeholder, onClick }: SearchProps) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        onSearch(searchText);
    }, [searchText, onSearch]);

    return (
        <div
            onClick={onClick}
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginRight: '0',
                backgroundColor: factory === 'primary' ? 'var(--nxp-primary-color)' : 'transparent',
            }}
        >
            <Textfield
                style={{
                    margin: '0',
                    borderRadius: '8px',
                    backgroundColor: 'var(--nxp-secondary-shadow-color)',
                    border: 'none',
                    color : 'black'
                }}
                placeholder={placeholder || 'Search'}
                value={searchText}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;
