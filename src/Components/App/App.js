import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WOW from 'wowjs';
import Header from '../Header';
import Footer from '../Footer';
import About from '../About';
import Portfolio from '../Portfolio';
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
        <main>
        <Switch>
          <Route exact path = '/' component = {About} />
          <Route path = '/about' component = {About} />
          <Route path = '/portfolio' component = {Portfolio} />
        </Switch>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
