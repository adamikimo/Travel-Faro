import React from 'react';
import FooterLinks from './FooterLinks';
import SocialIcons from './FooterSocialMediaIcons';
import '../../css/Footer.css';

interface Props {
    posType?: string;
    bottom?: any;
}

const Footer: React.FC<Props> = ({posType, bottom}) => {
    return (
        <div
        className='footer'
        style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600520611035-84157ad4084d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cHlyYW1pZHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)',
            position: 'absolute',
            bottom: `${bottom}`
        }}
        >   
                <div
                className='footer__body'
                >
                <FooterLinks />
                <div className="elfsight-app-2cb3a513-a52e-4a49-b374-76bb36729855 weather__news"></div>
                <SocialIcons />
                <img 
                className='footer__allCopyRightsReserved'
                src="/Footer.png" 
                alt=""
                />
                </div>
        </div>
    )
}

export default Footer;