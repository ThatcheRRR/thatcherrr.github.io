import { Social } from "../Social";
import "./footer.scss";

export const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <Social />
      <div className="footer__author">© Pavel Osipau, {new Date().getFullYear()}</div>
    </div>
  </footer>
);
