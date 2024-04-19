import { useContext } from "react";
import { languages } from "../../../languages";
import { LanguageContext } from "../../../context";
import "./experience.scss";

export const Experience = ({ item }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="experience">
      <span className="experience__title">{item.title[lang]}</span>
      <div className="experience__period">
        <span>{languages[lang].period}: </span>
        <span>{item.period}</span>
      </div>
      <ul className="experience__stack">
        {Object.keys(item.stack).map((i) => (
          <li key={i}>
            {languages[lang][i]}: {item.stack[i].join(", ")}
          </li>
        ))}
      </ul>
      <ul className="experience__responsibility">
        <span>{languages[lang].responsibility}:</span>
        {item.tasks[lang].map((i, ind) => (
          <li key={ind}>{i}</li>
        ))}
      </ul>
    </div>
  );
};
