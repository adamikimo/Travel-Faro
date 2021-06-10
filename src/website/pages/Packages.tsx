import React, {useState, useEffect} from 'react'
import '../css/packages.css';
import Card from '../components/Home/Card';
import "../css/CardDetails.css";
import PackagesCardDetails from './CardDetails';
import http from '../server-calling/axios';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

interface Props {
    onClick?: any;
}

const Packages: React.FC<Props> = ({onClick}) => {
    const [cards, setCards] = useState([]);
    const [packagesCardDetails, setPackagesCardDetails]: Array<any> = useState([]);
    const [visiblePackagesCardDetails, setVisiblePackagesCardDetails] = useState(false);
    const [packagesIndex, setPackagesIndex] = useState(0);
    useEffect(() => {
        async function setCardsData(){
            const req = await http.get('/cards/packages');
            setCards(req.data);
        }
        setCardsData();
        async function getPackagesCardDetails(){
            const req = await http.get('/cardDetails/packages');
            setPackagesCardDetails(req.data);
        }
        getPackagesCardDetails();
    } , []);
if(visiblePackagesCardDetails === false)
        return (
            <div
            onClick={onClick}
            className='packages'
            >
                {
                    cards.map((el: any, index) => (<Card 
                    bgImg={el.url}
                    cardText={el.text}
                    key={el._id}
                    onClick={() => {
                        setVisiblePackagesCardDetails(true);
                        setPackagesIndex(index);
                    }}
                    />))
                }
            </div>
        )
        else
        return(
            <PackagesCardDetails>
    <IconButton
         className='cardDetails__backBtn'
         onClick={() => {
            setVisiblePackagesCardDetails(false);
         }}
         >
             <ArrowBackIcon 
             fontSize='large'
             />
         </IconButton>
         <img 
         className='cardDetails__img'
         src={packagesCardDetails[packagesIndex].imgUrl}
         alt=''
         />
         <h1
         className='cardDetails__title'
         >
             {packagesCardDetails[packagesIndex].title}
         </h1>
         {packagesCardDetails[packagesIndex].innerCardText ?
         <h2
         className='overview'
         >
             {packagesCardDetails[packagesIndex].innerCardText}
         </h2> : '' }
         <div
         className='itenary'
         >
         {packagesCardDetails[packagesIndex].itenary.day1.title ?
         <>
         <h1>
             Day1:
         </h1> 
         <h1>
            {packagesCardDetails[packagesIndex].itenary.day1.title }
        </h1> 
        </>: ''}
        {packagesCardDetails[packagesIndex].itenary.day1.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day1.description}
        </h2> : ''}

        {packagesCardDetails[packagesIndex].itenary.day2.title ? 
        <>
        <h1>Day2:</h1>
        <h1>
            {packagesCardDetails[packagesIndex].itenary.day2.title }
        </h1>
        </> : ''}
        {packagesCardDetails[packagesIndex].itenary.day2.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day2.description}
        </h2> : ''}
        
        {packagesCardDetails[packagesIndex].itenary.day3.title ? <>
        <h1>Day3:</h1>
            <h1>
            {packagesCardDetails[packagesIndex].itenary.day3.title }
        </h1> 
        </>: ''}
        {packagesCardDetails[packagesIndex].itenary.day3.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day3.description}
        </h2> : ''}

        {packagesCardDetails[packagesIndex].itenary.day4.title ? <>
        <h1>Day4:</h1>
            <h1>
            {packagesCardDetails[packagesIndex].itenary.day4.title }
        </h1>
        </> : ''}
        {packagesCardDetails[packagesIndex].itenary.day4.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day4.description}
        </h2> : ''}

        {packagesCardDetails[packagesIndex].itenary.day5.title ? <>
        <h1>Day5:</h1>
        <h1>
            {packagesCardDetails[packagesIndex].itenary.day5.title }
        </h1>
        </> : ''}
        {packagesCardDetails[packagesIndex].itenary.day5.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day5.description}
        </h2> : ''}

        {packagesCardDetails[packagesIndex].itenary.day6.title ? <>
        <h1>Day6:</h1>
            <h1>
            {packagesCardDetails[packagesIndex].itenary.day6.title }
        </h1> 
        </>: ''}
        {packagesCardDetails[packagesIndex].itenary.day6.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day6.description}
        </h2> : ''}

        {packagesCardDetails[packagesIndex].itenary.day7.title ? <>
        <h1>Day7:</h1>
            <h1>
            {packagesCardDetails[packagesIndex].itenary.day7.title }
        </h1>
        </> : ''}
        {packagesCardDetails[packagesIndex].itenary.day7.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day7.description}
        </h2> : ''}

        {packagesCardDetails[packagesIndex].itenary.day8.title ? <>
        <h1>Day8:</h1>
        <h1>
            {packagesCardDetails[packagesIndex].itenary.day8.title }
        </h1>
        </> : ''}
        {packagesCardDetails[packagesIndex].itenary.day8.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day8.description}
        </h2> : ''}

        {packagesCardDetails[packagesIndex].itenary.day9.title ? <>
        <h1>Day9:</h1>
            <h1>
            {packagesCardDetails[packagesIndex].itenary.day9.title }
        </h1> 
        </>: ''}
        {packagesCardDetails[packagesIndex].itenary.day9.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day9.description}
        </h2> : ''}

        {packagesCardDetails[packagesIndex].itenary.day10.title ? <>
            <h1>Day10:</h1>
            <h1>
            {packagesCardDetails[packagesIndex].itenary.day10.title }
        </h1>
        </> : ''}
        {packagesCardDetails[packagesIndex].itenary.day10.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day10.description}
        </h2> : ''}

        {packagesCardDetails[packagesIndex].itenary.day11.title ? <>
        <h1>Day11:</h1>
            <h1>
            {packagesCardDetails[packagesIndex].itenary.day11.title }
        </h1>
        </> : ''}
        {packagesCardDetails[packagesIndex].itenary.day11.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day11.description}
        </h2> : ''}

        {packagesCardDetails[packagesIndex].itenary.day12.title ? <>
        <h1>Day12:</h1>
            <h1>
            {packagesCardDetails[packagesIndex].itenary.day12.title }
        </h1>
        </> : ''}
        {packagesCardDetails[packagesIndex].itenary.day12.description ? <h2>
            {packagesCardDetails[packagesIndex].itenary.day12.description}
        </h2> : ''}
         </div>
            </PackagesCardDetails>
        )
}

export default Packages
