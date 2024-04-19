import { useState, useContext } from "react";
import { Project } from "./Project";
import { Experience } from "./Experience";
import { LanguageContext } from "../../context";
import { languages } from "../../languages";
import { portfolio, experience } from "../../data/data";
import "./portfolio.scss";

export const Portfolio = () => {
  const { lang } = useContext(LanguageContext);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const onSelectProjectId = (id) => {
    setSelectedProjectId(id === selectedProjectId ? null : id);
  };

  return (
    <section className="main__portfolio portfolio">
      <div className="portfolio__container">
        <div className="portfolio__experience-container">
          {experience.map((item) => (
            <Experience key={item.id} item={item} />
          ))}
        </div>
        <h3 className="portfolio__pet-title">{languages[lang].petprojects}, 2020</h3>
        <div className="portfolio__pet-projects">
          {portfolio.map((item) => (
            <Project key={item.id} item={item} selectedProjectId={selectedProjectId} onSelectProjectId={onSelectProjectId} />
          ))}
        </div>
      </div>
    </section>
  );
};
