import React from 'react';
import '../css/AboutFaro.css';
import Footer from '../components/Footer/Footer';

interface Props{
    onClick?: any;
}

const text = [
    {text: 'es una agencia de turismo receptivo en Egipto, fundada en el ano 2003 con el objetivo de realizar los mejores viajes a este maravilloso pais, logrando ser una de las agencias notables durante los ultimos anos con reconocimiento a nivel internacional'},
    {text: 'es una de las agencias que tienen gran impacto en el campo turistico desde hace de 15 años de experiencia para realizar el sueno del viajero con un itinerario tan perfecto y con el servicio que lo merece y lo esperaba  y con guías turísticos profesionales que le acompañará en todos los lugares turisticos'},
    {text: 'es fruto de la unión de expriencia de un equipo de jovenes de habla de viarias idiomas para facilitar a los clients la media de comunicarse antes, mientras y despues de su viaje., y el gran fin nuestro es que el cliente pasa un viaje inolvidable y de primera conociendo grandes civilizaciones del mundo ,volviendo a su casa con toda la satisfaccion de lo cual. '},
    {text: 'con objetivo de poder brindarles el mejor servicio y calidad, a precios accesibles para lograr las expectativas de su viaje cual sea en los exoticos destinos'},
    {text: 'actualmente cuenta con un equipo , joven y comprometido en ofrecer el mejor servicio para viajes individuales, VIP, religiosos, grupales y de incentivo para empresas, con la calidad que siempre nos ha distinguido en el mercado; ajustandonos a las necesidades de cada cliente.'},
    {text: 'es una empresa constituida con toda la experiencia necesaria para el turismo a nivel mundial y claro recebimos clientes de todas las nacionalidade de donde sea'},
    {text: 'cuenta con unidades vehiculares de calidad, asi como con choferes totalmente capacitados y amables.Nuestros guias locales manejan perfectamente el idioma espanol y estan siempre pendientes del confort y necesidades del cliente. logrando con esto la identificacion del cliente con nuestro equipo de trabajo quien los recibe en los varios destinos con los brazos abiertos, en espera de que su viaje sea inolvidable'},
    {text: 'con la luz que te orienta a las costas de los mejores destinos'},
    {text: 'ofrece servicio al cliente durante las 24 horas del día, los 7 días de la semana por teléfono y correo electrónico si tiene preguntas sobre nuestros tours y servicios '},
];

const AboutFaro: React.FC<Props> = ({onClick}) => {
    return (
        <div
        onClick={onClick}
        className='aboutFaro'
        >
            <img 
            src='http://travelfaro.com/images/About.jpg'
            alt='about faro img'
            className='aboutFaro__img'
            />
            <div
            className='aboutFaro__title'
            >
                PORQUE TRAVEL FARO
            </div>
            <hr/>
            {text.map((el, index) => 
            <div
            className='aboutFaro__paragraph'
            >
                <h2
                className='aboutFaro__paragragh__Title'
                >
                    Travel&nbsp;Faro&nbsp;
                </h2>
                <h3
                className='aboutFaro__paragragh__Text'
                key={index}
                >
                    {el.text}
                </h3>
            </div>    
            )}
            <Footer />
        </div>
    );
}

export default AboutFaro;