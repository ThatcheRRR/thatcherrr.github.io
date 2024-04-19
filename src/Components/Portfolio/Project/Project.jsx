import { useContext } from "react";
import cn from "classnames";
import { LanguageContext } from "../../../context";
import { languages } from "../../../languages";
import "./project.scss";

export const Project = ({ item, selectedProjectId, onSelectProjectId }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div
      onClick={() => onSelectProjectId(item.id)}
      className={cn("portfolio__project project", {
        "project--active": selectedProjectId === item.id,
      })}
    >
      <div className="project__description">
        <picture>
          <source srcSet={item.image.full} media="(min-width: 768px)" />
          <source srcSet={item.image.small} media="(min-width: 320px)" />
          <img src={item.image.full} alt={item.title || "project title"} />
        </picture>
      </div>
      <div className="project__overlay">
        <h2>{item.title}</h2>
        <ul className="project__stack">
          {item.stack.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h2>{languages[lang].links}</h2>
        <div className="project__links links">
          <a className="links__item" href={item.deploy}>
            {languages[lang].demo}
          </a>
          <a className="links__item" href={item.repo}>
            {languages[lang].repo}
          </a>
        </div>
      </div>
    </div>
  );
};
