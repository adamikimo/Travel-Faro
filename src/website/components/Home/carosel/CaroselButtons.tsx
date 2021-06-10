import React from 'react'
import IconButton from '@material-ui/core/IconButton';

interface Props{
    Icon?: any;
}

const CaroselButtons: React.FC<Props> = ({ Icon }) => {
    return (
        <IconButton
        className='carosel__btn'
        >
            {Icon}        </IconButton>
    )
}

export default CaroselButtons
