import React from 'react';
import '../css/OurService.css'

interface Props{
    onClick?: any;
}

const Transportations: React.FC<Props> = ({onClick}) => {
    return (
        <div
        onClick={onClick}
        className='transportaitions'
        >

        </div>
    );
}
export default Transportations;