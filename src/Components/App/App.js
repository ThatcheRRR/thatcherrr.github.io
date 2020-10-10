import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WOW from 'wowjs';
import Header from '../Header';
import './app.scss';

const App = () => {
  const [className, setClassName] = useState('');

  useEffect(() => {
    new WOW.WOW().init();
    window.pageYOffset
    window.addEventListener('scroll', scrolling);
  }, []);
  
  useEffect(() => {
    return () => window.removeEventListener('scroll', scrolling)
  }, []);

  const scrolling = () => {
    if(window.pageYOffset >= 100) {
      setClassName('header--sticky');
    } else {
      setClassName('');
    }
  };

  return (
    <Router>
      <Header className = {className} />
    </Router>
  );
}

export default App;
