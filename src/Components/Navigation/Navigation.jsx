import { useState, useEffect, useContext } from "react";
import { HeaderLink } from "./HeaderLink";
import { Select } from "../Select";
import { LanguageContext } from "../../context";
import { links } from "../../data/data";
import { languageOptions } from "./constants";
import { languages } from "../../languages";
import "./navigation.scss";

export const Navigation = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [className, setClassName] = useState("");

  const scrolling = () => {
    setClassName("");
    if (window.pageYOffset >= 60) {
      setClassName("nav--sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolling);
    window.addEventListener("load", scrolling);

    return () => window.removeEventListener("scroll", scrolling);
  }, []);

  return (
    <nav className={`header__nav nav ${className}`}>
      <div className="nav__container">
        <div className="nav__titles">
          {links[lang].map((item) => (
            <HeaderLink key={item.path} path={item.path} label={item.label} />
          ))}
        </div>
        <Select
          options={languageOptions}
          onChange={(opt) => setLang(opt.value)}
          placeholder={languages[lang].selectOption}
          value={languageOptions.find((i) => i.value === lang)}
        />
      </div>
    </nav>
  );
};
