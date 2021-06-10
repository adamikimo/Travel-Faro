import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Search from './Search';
import '../css/Header.css';

interface Props{
    onClickIconButton?: () => void;
}

const Header: React.FC<Props> = ({onClickIconButton}) => {
    return (
        <div
        className='header'
        >
            <div
            className='header__left-part'
            >
            <img 
            className='header__logo'
            src='/logo-travel-faro.jpg'
          alt='logo'
            />
            <IconButton
            className='header__humburgerIcon'
            onClick={onClickIconButton}
            >
                <MenuIcon 
                fontSize='large'
                />
            </IconButton>
            </div>
            <Search />
            <div
            className='header__iataEtaaLogos'
            >
                <img
                className='header__Logo'
                src='data:image/png;base64,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'
                alt=''
                />
                <img 
                className='header__LogoTwo'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LT8L61eL2sypUwfeY3NyNiTxOp2CGC0v4g&usqp=CAU"
                alt=""
                />
            </div>
        </div>
    )
}

export default Header;
