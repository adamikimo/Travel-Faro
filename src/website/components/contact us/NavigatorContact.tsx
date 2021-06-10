import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/common.css'

interface Props{

}

const NavigatorContact: React.FC<Props> = () => {
    return (
            <Link 
            to='/Chats'
            className='bg-white rounded-2xl w-16 h-16 fixed top-1 contact-navigator'
            >
                <img 
                src='/chat.png'
                width='64px'
                height='64px'
                alt='chat icon'
                />
            </Link>
    );
}
export default NavigatorContact;