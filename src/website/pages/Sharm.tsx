import React, { useState, useEffect }from 'react';
import '../css/common.css';
import http from '../server-calling/axios';
import Card from '../components/Home/Card';
import '../css/CardDetails.css';
import SharmCardDetails from './CardDetails';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

interface Props {

}

const Sharm: React.FC<Props>= () => {
    const [cards, setCards] = useState([]);
    const [sharmCardDetails, setSharmCardDetails]: Array<any> = useState([]);
    const [sharmIndex, setSharmIndex] = useState(0);
    const [sharmVisibleCardDetails, setSharmVisibleCardDetails] = useState(false);
    useEffect(()=>{
        async function setSharmCardsData(){
            const req = await http.get('/cards/excurtions/sharmElSheikh');
            setCards(req.data);
        }
        setSharmCardsData();

        async function getSharmCardDetails(){
            const req = await http.get('/cardDetails/excurtions/sharm');
            setSharmCardDetails(req.data);
        }
        getSharmCardDetails();
    },[]);
if(sharmVisibleCardDetails === false)
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
                    setSharmIndex(index);
                    setSharmVisibleCardDetails(true);
                }}
                />))
            }
        </div>
    )
    else
    return(
        <SharmCardDetails>
    <IconButton
         className='cardDetails__backBtn'
         onClick={() => {
            setSharmVisibleCardDetails(false);
         }}
         >
             <ArrowBackIcon 
             fontSize='large'
             />
         </IconButton>
         <img 
         className='cardDetails__img'
         src={sharmCardDetails[sharmIndex].imgUrl}
         alt=''
         />
         <h1
         className='cardDetails__title'
         >
             {sharmCardDetails[sharmIndex].title}
         </h1>
             {sharmCardDetails[sharmIndex].innerCardText ? <h2
             className='overview'
             >
                 {sharmCardDetails[sharmIndex].innerCardText}
             </h2>: '' }
        </SharmCardDetails>
    )
}

export default Sharm
