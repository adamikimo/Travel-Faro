import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import http from '../../../server-calling/axios';
import '../../../css/Carosel.css';

const Carosel = ({ Slides }) => {
    const [current, setCurrent] = useState(0);
    const [photos, setPhotos] = useState([]);
    const length = Slides.length;

    const next = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }

    const prev = () => {
        setCurrent(current === 0 ? length-1 : current-1)
    }

    useEffect(() => {
        async function getPhotosData(){
            const req = await http.get('/caroselImages');
            setPhotos(req.data);
            console.log(req.data);
        }
        getPhotosData();
    }, []);
    

    return (
        <div
        className='carosel'
        >
            <IconButton
            className='carosel__button'
            onClick={prev}
            style={{
                backgroundColor: 'transparent',
            }}
            >
                <ChevronLeftIcon
                style={{
                    color: '#fff'
                }}
                fontSize='large'
                />
            </IconButton>
            {
                photos.map((el, index) => 
                    {
                    return(
                        <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                        >
                        {index === current && (
                            <>
                            <img 
                            className='carosel__img'
                            alt={`img id is ${el.id}`}
                            src={el.url}
                            key={el._id}
                            />
                            <h1
                            className='carosel__img__text'
                            >
                                {el.text}
                            </h1>
                            </>
                        )}
                        </div>
                    )
                    }
                )
            }
            <IconButton
            className='carosel__button'
            onClick={next}
            style={{
                backgroundColor: 'transparent',
            }}
            >
                <ChevronRightIcon 
                style={{
                    color: '#fff'
                }}
                fontSize='large'
                />
            </IconButton>
        </div>
    )
}

export default Carosel;
