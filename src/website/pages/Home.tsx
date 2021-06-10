import React, { useState, useEffect } from 'react';
import Card from '../components/Home/Card';
import Carosel from '../components/Home/carosel/Carosel.jsx';
import Footer from '../components/Footer/Footer';
import http from '../server-calling/axios';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import '../css/CardDetails.css';
import '../css/Home.css';
import HomeCardDetails from './CardDetails';

interface Props{
    onClick?: any;
}



const Home: React.FC<Props> = ({ onClick }) => {
    const [cards, setCards] = useState([]);
    const [slides, setSlides] = useState([]);
    const [homeCardDetails, setHomeCardDetails]: Array<any> = useState([]);
    const [visibleHomeCardDetails, setVisibleHomeCardDetails] = useState(false);
    const [homeIndex, setHomeIndex] = useState(0);
    useEffect(()=> {
        async function getCardsData(){
            const req = await http.get('/cards/home');
            setCards(req.data)
        }
        getCardsData();

        
        async function getCaroselData(){
            const req = await http.get('/caroselImages');
            setSlides(req.data)
        }
        getCaroselData();

        
        async function getCardDetails(){
            const req = await http.get('/cardDetails/home');
            setHomeCardDetails(req.data)
    }
    getCardDetails();
    //eslint-disable-next-light
    },[]);
    if(visibleHomeCardDetails === false)
    return (
        <div
        onClick={onClick}
        className='home'
        >
            <Carosel 
            Slides={slides}
            />
            <div
            className='cards'
            >
            {
                cards.map((el: any, index) => {
                    return(<Card 
                    bgImg={el.url}
                    cardText={el.text}
                    key={el._id}
                    onClick={() => {
                        setHomeIndex(index);
                        setVisibleHomeCardDetails(true);
                    }}
                    />)
                })
            }
            </div>
            <Footer 
            bottom='-430%'
            />
        </div>
    )
    else
     return(
     <HomeCardDetails>
         <IconButton
         className='cardDetails__backBtn'
         onClick={() => {
            setVisibleHomeCardDetails(false);
         }}
         >
             <ArrowBackIcon 
             fontSize='large'
             />
         </IconButton>
         <img 
         className='cardDetails__img'
         src={homeCardDetails[homeIndex].imgUrl}
         alt=''
         />
         <h1
         className='cardDetails__title'
         >
             {homeCardDetails[homeIndex].title}
         </h1>
         {
             homeCardDetails[homeIndex].innerCardText ? <h2
             className='overview'
             >
                 {homeCardDetails[homeIndex].innerCardText}
             </h2>:''
         }
    </HomeCardDetails>
    )
}
export default Home;
