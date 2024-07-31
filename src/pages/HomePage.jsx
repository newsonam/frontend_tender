import React from 'react';
import tender from '../assets/tender.png'
import './style.css';
const HomePage = () => {
  return (
    <div>
      <img src={tender} alt="..loading" className='tender-img'/>
    </div>
  );
};

export default HomePage;
