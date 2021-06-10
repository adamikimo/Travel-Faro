import React, {useEffect, useState} from 'react'
import http from '../server-calling/axios.js';
import '../css/CardDetails.css';
import Card from '../components/Home/Card';
import AswanCardDetails from './CardDetails';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon  from '@material-ui/icons/ArrowBack';
import '../css/common.css';

interface Props {

}

const Aswan: React.FC<Props> = () => {
    const [cards, setCards] = useState([]);
    const [aswanCardDetails, setAswanCardDetails]: Array<any> = useState([]);
    const [aswanIndex, setAswanIndex] = useState(0);
    const [aswanVisibleCardDetails, setAswanVisibleCardDetails] = useState(false);
    useEffect(()=>{
        const getAswanCards = async() => {
            const req = await http.get('/cards/excurtions/aswan');
            setCards(req.data);
        }
        getAswanCards();
        const getAswanCardDetails = async () => {
            const req = await http.get('/cardDetails/excurtions/aswan');
            setAswanCardDetails(req.data);
        }
        getAswanCardDetails();
    },[]);
if(aswanVisibleCardDetails === false)
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
                    setAswanIndex(index);
                    setAswanVisibleCardDetails(true);
                }}
                />))
            }
        </div>
    )
    else
    return(
        <AswanCardDetails>
    <IconButton
         className='cardDetails__backBtn'
         onClick={() => {
            setAswanVisibleCardDetails(false);
         }}
         >
             <ArrowBackIcon 
             fontSize='large'
             />
         </IconButton>
         <img 
         className='cardDetails__img'
         src={aswanCardDetails[aswanIndex].imgUrl}
         alt=''
         />
         <h1
         className='cardDetails__title'
         >
             {aswanCardDetails[aswanIndex].title}
         </h1>
         {aswanCardDetails[aswanIndex].innerCardText ? <h2
             className='overview'
             >
                 {aswanCardDetails[aswanIndex].innerCardText}
             </h2>: '' }
        </AswanCardDetails>
    )
}

export default Aswan
