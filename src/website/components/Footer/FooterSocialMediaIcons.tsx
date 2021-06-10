import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import '../../css/Footer.css';

interface Props{

}

const FooterSocialMediaIcons: React.FC<Props> = () => {
    return (
        <div
        className='footer__socialIcons'
        >
            <FacebookIcon 
            fontSize='large'
            />
            <InstagramIcon 
            fontSize='large'
            />
            <WhatsAppIcon 
            fontSize='large'
            />
            <YouTubeIcon 
            fontSize='large'
            />
            <TwitterIcon 
            fontSize='large'
            />
            <PinterestIcon 
            fontSize='large'
            />
        </div>
    )
}

export default FooterSocialMediaIcons
