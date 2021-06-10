import React from 'react';
import '../css/CardDetails.css';

const HomeCardDetails: React.FC = ({ children }) => {
  return (
    <div
    className='cardDetails'
    >
      { children }
    </div>
  )
}

export default HomeCardDetails;

