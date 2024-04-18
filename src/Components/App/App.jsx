import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { About } from "../About";
import { Portfolio } from "../Portfolio";
import { ErrorPage } from "../ErrorPage";
import "./app.scss";

export const App = () => (
  <BrowserRouter>
    <Header />
    <main className="main">
      <Routes>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="*" component={ErrorPage} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);
