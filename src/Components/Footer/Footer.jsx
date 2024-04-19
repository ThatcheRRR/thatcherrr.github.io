import { useContext } from "react";
import { Social } from "../Social";
import { LanguageContext } from "../../context";
import { languages } from "../../languages";
import "./footer.scss";

export const Footer = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <div className="footer__container">
        <Social />
        <div className="footer__author">
          © {languages[lang].name}, {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
