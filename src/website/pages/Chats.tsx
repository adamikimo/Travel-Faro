import React, {useState} from 'react';
import '../css/Chats.css';

interface Props {
    onClick?: any;
}

const Chats: React.FC<Props> = ({onClick}) => {
    return (
        <div
        onClick={onClick}
        className='chats'
        >
         <div 
         className="chats__input"
         >
             <input 
             type="text"
             className="chats__input__input"
             />
             <button 
             className="chats__input__btn"
             type='submit'
             >
                 send
            </button>
            </div>   
        </div>
    )
}

export default Chats;
