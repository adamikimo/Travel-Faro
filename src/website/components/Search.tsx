import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import '../css/Search.css';

interface Props{
    onClick?:any;
}

const Search: React.FC<Props> = ({ onClick }) => {
    const [search, setSearch] = useState('');
    return (
        <div
        className='Search'
        >
            <input 
            className='Search__input'
            value={search}
            placeholder='Buscar'
            onChange={e => setSearch(e.target.value)}
            />   
            <IconButton
            className='Search__btn'
            onClick={onClick}
            >
                <SearchIcon />
            </IconButton>
        </div>
    )
}

export default Search;
