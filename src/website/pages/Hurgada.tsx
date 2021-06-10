import React, { useState, useEffect }from 'react';
import '../css/common.css';
import http from '../server-calling/axios';
import Card from '../components/Home/Card';
import '../css/CardDetails.css';
import HurgadaCardDetails from './CardDetails';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

interface Props {

}

const Hurgada: React.FC<Props>= () => {
    const [cards, setCards] = useState([]);
    const [hurgadaCardDetails, setHurgadaCardDetails]: Array<any> = useState([]);
    const [hurgadaIndex, setHurgadaIndex] = useState(0);
    const [hurgadaVisibleCardDetails, setHurgadaVisibleCardDetails] = useState(false);
    useEffect(()=>{
        async function setHurgadaCardsData(){
            const req = await http.get('/cards/excurtions/hurgada');
            setCards(req.data);
        }
        setHurgadaCardsData();

        async function getHurgadaCardDetails(){
            const req = await http.get('/cardDetails/excurtions/hurgada');
            setHurgadaCardDetails(req.data);
        }
        getHurgadaCardDetails();
    },[]);
if(hurgadaVisibleCardDetails === false)
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
                    setHurgadaIndex(index);
                    setHurgadaVisibleCardDetails(true);
                }}
                />))
            }
        </div>
    )
    else
    return(
        <HurgadaCardDetails>
    <IconButton
         className='cardDetails__backBtn'
         onClick={() => {
            setHurgadaVisibleCardDetails(false);
         }}
         >
             <ArrowBackIcon 
             fontSize='large'
             />
         </IconButton>
         <img 
         className='cardDetails__img'
         src={hurgadaCardDetails[hurgadaIndex].imgUrl}
         alt=''
         />
         <h1
         className='cardDetails__title'
         >
             {hurgadaCardDetails[hurgadaIndex].title}
         </h1>
             {hurgadaCardDetails[hurgadaIndex].innerCardText ? <h2
             className='overview'
             >
                 {hurgadaCardDetails[hurgadaIndex].innerCardText}
             </h2>: '' }
        </HurgadaCardDetails>
    )
}

export default Hurgada
