import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import './header.scss';

const Header = ({className}) => {
  return (
    <header className = {`header ${className}`}>
      <Navigation />
      <div className = 'header__title title'>
        <h1 className = 'title__author'>Pavel Osipau</h1>
        <p className = 'title__description'>Front-end developer</p>
        <Switch>
          <Route path = '/about' render = {() => (<h1 className = 'title__name wow fadeInDown' data-wow-duration = '1s'>About me</h1>)} />
          <Route path = '/portfolio' render = {() => (<h1 className = 'title__name wow fadeInDown' data-wow-duration = '1s'>Portfolio</h1>)} />
          <Route render = {() => (<h1 className = 'title__name wow fadeInDown' data-wow-duration = '1s'>About me</h1>)} />
        </Switch>
      </div>
    </header>
  );
}

export default Header;
