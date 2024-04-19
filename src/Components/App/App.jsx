import { useState } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { About } from "../About";
import { Portfolio } from "../Portfolio";
import { LanguageContext } from "../../context";
import "./app.scss";

export const App = () => {
  const [lang, setLang] = useState("ru");

  return (
    <HashRouter>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <Header />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </LanguageContext.Provider>
    </HashRouter>
  );
};
