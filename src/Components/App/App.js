import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WOW from 'wowjs';
import './app.scss';
import Header from '../Header';

const App = ({children}) => {
  console.log(children)
  useEffect(() => {
    new WOW.WOW().init();
	}, []);

  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
