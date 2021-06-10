import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Footer.css';

interface Props {

}

const FooterLinks:  React.FC<Props>= () => {
    return (
        <div
        className='footer__links'
        >
            <Link
            to='/'
            className='footer__links__link'
            >
                Home
            </Link>
            <br />
            <br />
            <br />
            <Link 
            to='/porque travel faro'
            className='footer__links__link'
            >
                Porque Travel Faro
            </Link>
            <br />
            <br />
            <br />
            <Link 
            to='/excurtions'
            className='footer__links__link'
            >
                Excursiones
            </Link>
            <br />
            <br />
            <br />
            <Link 
            to='/servesiones'
            className='footer__links__link'
            >
            Paquetes
            </Link>
            <br />
            <br />
            <br />
            <Link
            to='/Paquetes'
            className='footer__links__link'
            >
            Traslados
            </Link>
            <br />
            <br />
            <br />
            <Link 
            to='/contactenos'
            className='footer__links__link'
            >
                Contáctenos
            </Link>
        </div>
    )
}

export default FooterLinks;
