import React from 'react';
import Description from '../Description/Description';
import Logo from '../Logo/Logo';
import './Home.css';

const Home = () => {
  return (
    <div className='main'>
        <Description></Description>
        <Logo></Logo>
    </div>
  )
}

export default Home;
