import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import WOW from 'wowjs';
import Header from '../Header';
import Footer from '../Footer';
import About from '../About';
import Portfolio from '../Portfolio';
import ErrorPage from '../ErrorPage';
import './app.scss';

const App = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <Header />
        <main className = 'main'>
        <Switch>
          <Route exact path = '/' component = {About} />
          <Route path = '/about' component = {About} />
          <Route path = '/portfolio' component = {Portfolio} />
          <Route component = {ErrorPage} />
        </Switch>
        </main>
      <Footer />
    </>
  );
}

export default App;
