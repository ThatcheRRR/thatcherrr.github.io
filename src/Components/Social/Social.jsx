import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contacts } from "../../data/data";
import "./social.scss";

export const Social = () => (
  <nav className="footer__nav social">
    {contacts.map((item) => (
      <a className="social__link" key={item.title} href={item.link} title={item.title}>
        <FontAwesomeIcon icon={item.image} size="2x" color={item.color} />
      </a>
    ))}
  </nav>
);
