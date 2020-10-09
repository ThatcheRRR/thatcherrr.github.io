import React, {useEffect} from 'react';
import WOW from 'wowjs';
import './app.scss';

const App = () => {
  useEffect(() => {
    new WOW.WOW().init();
	}, []);

  return (
    <h1 className="wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s">An animated element</h1>
  );
}

export default App;
