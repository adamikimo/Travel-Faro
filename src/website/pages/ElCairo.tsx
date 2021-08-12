// imports
import React, { 
    useState, 
    useEffect 
}from 'react';
import '../css/common.css';
import http from '../server-calling/axios';
import Card from '../components/Home/Card';
import '../css/CardDetails.css';
import ElCairoCardDetails from './CardDetails';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

// props interface
interface Props {

}

const ElCairo: React.FC<Props> = () => {
    const [cards, setCards] = useState([]);
    const [elCairoCardDetails, setElCairoCardDetails]: Array<any> = useState([]);
    const [elCairoIndex, setElCairoIndex] = useState(0);
    const [elCairoVisibleCardDetails, setElCairoVisibleCardDetails] = useState(false);
    useEffect(()=>{
        async function setElCairoCardsData(){
            const req = await http.get('/cards/excurtions/elCairo');
            setCards(req.data);
        }
        setElCairoCardsData();

        async function getElCairoCardDetails(){
            const req = await http.get('/cardDetails/excurtions/elcairo');
            setElCairoCardDetails(req.data);
        }
        getElCairoCardDetails();
    },[]);
if(elCairoVisibleCardDetails === false)
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
                    setElCairoIndex(index);
                    setElCairoVisibleCardDetails(true);
                }}
                />))
            }
        </div>
    )
    else
    return(
        <ElCairoCardDetails>
    <IconButton
         className='cardDetails__backBtn'
         onClick={() => {
            setElCairoVisibleCardDetails(false);
         }}
         >
             <ArrowBackIcon 
             fontSize='large'
             />
         </IconButton>
         <img 
         className='cardDetails__img'
         src={elCairoCardDetails[elCairoIndex].imgUrl}
         alt=''
         />
         <h1
         className='cardDetails__title'
         >
             {elCairoCardDetails[elCairoIndex].title}
         </h1>
             {elCairoCardDetails[elCairoIndex].innerCardText ? <h2
             className='overview'
             >
                 {elCairoCardDetails[elCairoIndex].innerCardText}
             </h2>: '' }
        </ElCairoCardDetails>
    )
}

export default ElCairo;
