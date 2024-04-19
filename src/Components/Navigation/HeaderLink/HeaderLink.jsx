import { NavLink } from "react-router-dom";
import "./headerLink.scss";

export const HeaderLink = ({ path, label }) => (
  <NavLink className="nav__link" to={path}>
    {label}
  </NavLink>
);
