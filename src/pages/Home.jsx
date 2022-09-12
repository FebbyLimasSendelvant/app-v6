import React from 'react';
import '../style/Home.css';
import Me from '../assets/self2-1.png';
const Home = () => {
    return (
        <div className='header'>
        <div className='container header__container'>
            <div className="me">
                <img src={Me} alt="me" />
            </div>
            <h3> Hai Saya </h3>
            <h1>Feby Limas</h1>
        </div>
        </div>
    );
};

export default Home;