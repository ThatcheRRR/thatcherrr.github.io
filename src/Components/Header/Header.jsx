import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "../Navigation";
import { LanguageContext } from "../../context";
import { languages } from "../../languages";
import "./header.scss";

export const Header = ({ className }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <header className="header">
      <Navigation className={className} />
      <div className="header__title title">
        <h1 className="title__author">{languages[lang].name}</h1>
        <p className="title__description">{languages[lang].job}</p>
        <div className="title__name">
          <Routes>
            <Route path="/about" element={<h2>{languages[lang].about}</h2>} />
            <Route path="/portfolio" element={<h2>{languages[lang].portfolio}</h2>} />
          </Routes>
        </div>
      </div>
    </header>
  );
};
