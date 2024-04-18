import { Route, Routes } from "react-router-dom";
import { Navigation } from "../Navigation";
import "./header.scss";

export const Header = ({ className }) => (
  <header className="header">
    <Navigation className={className} />
    <div className="header__title title">
      <h1 className="title__author">Pavel Osipau</h1>
      <p className="title__description">Front-end developer</p>
      <div className="title__name">
        <Routes>
          <Route path="/" exact render={() => <h1>About me</h1>} />
          <Route path="/about" render={() => <h1>About me</h1>} />
          <Route path="/portfolio" render={() => <h1>Portfolio</h1>} />
          <Route render={() => <h1>Error</h1>} />
        </Routes>
      </div>
    </div>
  </header>
);
