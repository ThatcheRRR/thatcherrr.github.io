import React from 'react';
import './errorPage.scss';

const ErrorPage = () => {
  return(
    <section className = 'main__error-page error-page'>
      <h1 className = 'error-page__title'>
        Ooops... Something has gone wrong :C
      </h1>
      <p className = 'error-page__description'>
        Please, choose another root from navigation bar
      </p>
    </section>
  )
};

export default ErrorPage;
