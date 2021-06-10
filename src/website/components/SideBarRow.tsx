import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SideBarRow.css';

interface Props{
    path?: string;
    Icon?: any;
    Title?: string;
    onClick?: any;
}

const SideBarRow: React.FC<Props> = ({ 
    path,
    Icon,
    Title,
    onClick
}) => {
    return (
        <Link
        to={path ? path : ''}
        className='sidebarRow'
        onClick={onClick}
        >
            
            <div
            className='sidebarRow__body'
            >
                <div
                className='sidebarRow__icon'
                >
                {Icon}
                </div>
                <h3
                className='sidebarRow__title'
                >
                    {Title}
                </h3>
            </div>
        </Link>
    )
}

export default SideBarRow;
