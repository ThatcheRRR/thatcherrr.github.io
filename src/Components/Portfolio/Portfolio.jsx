import { Project } from "./Project";
import { portfolio } from "../../data/data";
import "./portfolio.scss";

export const Portfolio = () => (
  <section className="main__portfolio portfolio">
    <div className="portfolio__container">
      {portfolio.map((item, i) => (
        <Project key={i} item={item} />
      ))}
    </div>
  </section>
);
