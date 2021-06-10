import React from 'react';
import FormContact from '../components/contact us/FormContact';
import Footer from '../components/Footer/Footer';
import '../css/ContactUs.css';

interface Props{
    onClick?: any;
}

const ContactUs: React.FC<Props> = ({onClick}) => {
    return (
        <div
        onClick={onClick}
        className='contactUs'
        >
            <div
            className='contactUs__address-data'
            >
                Direcion&nbsp;&nbsp;&nbsp;:&nbsp;01 El Rabie St. Hadaiek El Ahram, Behind Meridien Pyramids Hotel, Giza, Egypt
                <br />
                Tel.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;+202 33 77 91 74 & +202 33 77 75 45 & +202 33 77 75 46 
                <br />
                Fax.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;+202 33 77 91 75
                <br />
                E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;info@travelfaro.com
            </div>
            <img 
            className='contactUs__img'
            src='/contactenos.jpg'
            alt='contactenos'
            />
            <FormContact />
            <Footer 
            bottom='-80%'
            />
        </div>
    );
}
export default ContactUs;