import React from 'react';
import '../../css/Card.css';
import {Link} from 'react-router-dom';

interface Props{
    bgImg?: string;
    cardText?: string;
    onClick?: () => void;
}

const Card: React.FC<Props> = ({ bgImg, cardText, onClick }) => {
    return (
        <>
        <div
        className='card'
        onClick={onClick}
        >
        <img 
        src={bgImg} 
        className='card__img'
        alt="this is the card img"
        />
        <h2
        className='card__text'
        >
            {cardText}
        </h2>
        </div>
        </>
    )
}

export default Card;
