import React, { useState, useEffect }from 'react';
import '../css/common.css';
import http from '../server-calling/axios';
import Card from '../components/Home/Card';
import '../css/CardDetails.css';
import LuxorCardDetails from './CardDetails';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

interface Props {

}

const Luxor: React.FC<Props>= () => {
    const [cards, setCards] = useState([]);
    const [luxorCardDetails, setLuxorCardDetails]: Array<any> = useState([]);
    const [luxorIndex, setLuxorIndex] = useState(0);
    const [luxorVisibleCardDetails, setLuxorVisibleCardDetails] = useState(false);
    useEffect(()=>{
        async function setLuxorCardsData(){
            const req = await http.get('/cards/excurtions/luxor');
            setCards(req.data);
        }
        setLuxorCardsData();

        async function getLuxorCardDetails(){
            const req = await http.get('/cardDetails/excurtions/luxor');
            setLuxorCardDetails(req.data);
        }
        getLuxorCardDetails();
    },[]);
if(luxorVisibleCardDetails === false)
    return (
        <div
        className='common__Excurtion'
        >
            {
                cards.map((el: any, index) => (<Card 
                bgImg={el.url}
                cardText={el.text}
                key={el._id}
                onClick={() => {
                    setLuxorIndex(index);
                    setLuxorVisibleCardDetails(true);
                }}
                />))
            }
        </div>
    )
    else
    return(
        <LuxorCardDetails>
    <IconButton
         className='cardDetails__backBtn'
         onClick={() => {
            setLuxorVisibleCardDetails(false);
         }}
         >
             <ArrowBackIcon 
             fontSize='large'
             />
         </IconButton>
         <img 
         className='cardDetails__img'
         src={luxorCardDetails[luxorIndex].imgUrl}
         alt=''
         />
         <h1
         className='cardDetails__title'
         >
             {luxorCardDetails[luxorIndex].title}
         </h1>
             {luxorCardDetails[luxorIndex].innerCardText ? <h2
             className='overview'
             >
                 {luxorCardDetails[luxorIndex].innerCardText}
             </h2>: '' }
        </LuxorCardDetails>
    )
}

export default Luxor
