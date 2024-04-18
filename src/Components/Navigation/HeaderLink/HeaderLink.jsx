import { Link } from "react-router-dom";
import "./headerLink.scss";

export const HeaderLink = ({ pathname }) => (
  <Link className="nav__link" to={`/${pathname.toLowerCase()}`}>
    {pathname}
  </Link>
);
