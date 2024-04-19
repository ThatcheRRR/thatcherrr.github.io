import { useContext } from "react";
import { LanguageContext } from "../../context";
import { languages } from "../../languages";
import "./about.scss";

export const About = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <section className="main__about about">
      <div className="about__container">
        <div className="about__description">
          <div className="about__intro">{languages[lang].intro}</div>
          <article className="about__education theme">
            <div className="theme__header">
              <h3 className="theme__title">{languages[lang].education}</h3>
            </div>
            <ul className="theme__list list">
              <li className="list__item item">
                <h4 className="item__header">{languages[lang].university}</h4>
                <div>
                  <p className="item__description">{languages[lang].faculty}</p>
                  <p className="item__description">{languages[lang].degree} (2017 - 2021)</p>
                </div>
              </li>
            </ul>
          </article>
          <article className="about__courses theme">
            <div className="theme__header">
              <h3 className="theme__title">{languages[lang].courses}</h3>
            </div>
            <ul className="theme__list list">
              <li className="list__item item">
                <h4 className="item__header">
                  <a href="https://app.rs.school/certificate/mfbzwg95" target="_blank">
                    The Rolling Scopes School
                  </a>
                </h4>
                <p className="item__description">Rolling Scopes School, JS / FRONT-END (2019Q3)</p>
              </li>
              <li className="list__item item">
                <h4 className="item__header">
                  <a href="https://app.rs.school/certificate/gs134s2h" target="_blank">
                    The Rolling Scopes School
                  </a>
                </h4>
                <p className="item__description">Rolling Scopes School, REACT (2020Q3)</p>
              </li>
              <li className="list__item item">
                <h4 className="item__header">
                  <a
                    href="https://www.freecodecamp.org/certification/fcc25c9b30f-035a-4002-aa2f-60a3a8d95db3/responsive-web-design"
                    target="_blank"
                  >
                    freecodecamp.org
                  </a>
                </h4>
                <p className="item__description">Responsive Web Design Certification (300 hours)</p>
              </li>
            </ul>
          </article>
          <article className="about__skills theme">
            <div className="theme__header">
              <h3 className="theme__title">{languages[lang].skills}</h3>
            </div>
            <div className="theme__description">
              <ul className="theme__list list">
                <li>{languages[lang].languages}: TypeScript, JavaScript</li>
                <li>{languages[lang].frameworks}: React, jQuery</li>
                <li>{languages[lang].state}: Redux (Redux Toolkit, redux-thunk, redux-saga, rtk-query)</li>
                <li>{languages[lang].routing}: React Router</li>
                <li>{languages[lang].testing}: jest</li>
                <li>
                  {languages[lang].bundlers}: Vite, Webpack ({languages[lang].bundlersSetUp})
                </li>
                <li>{languages[lang].ui}: Ant Design, MaterialUI, Carbon Design</li>
                <li>
                  {languages[lang].styling}: CSS3, SASS/SCSS, Less, bootstrap, CSS {languages[lang].modules}
                </li>
                <li>{languages[lang].formatting}: eslint, prettier, SonarQube</li>
                <li>{languages[lang].markup}: HTML5</li>
                <li>
                  {languages[lang].methodologies}: Agile, Scrum, Kanban, {languages[lang].bem}
                </li>
                <li>{languages[lang].versions}: Git (Github, Gitlab)</li>
                <li>{languages[lang].atlassian}: Jira, Confluence</li>
                <li>{languages[lang].design}: Figma, InVision, Photoshop, Pixel Perfect</li>
                <li>{languages[lang].components}: DHTMLX Gantt, echarts, react-table, chart.js, rc-tree, react-select</li>
                <li>{languages[lang].ide}: JetBrains WebStorm, Visual Studio Code</li>
                <li>{languages[lang].utility}: axios, casl, moment, lodash, date-fns, i18n, husky, dayjs</li>
              </ul>
              {languages[lang].rest}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
