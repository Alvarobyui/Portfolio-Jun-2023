import { Header } from "./components/Header";
import { HeroArea } from "./components/HeroArea";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Activities } from "./components/Activities";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

import "./index.css";

/* import { I18nextProvider } from 'react-i18next'; */
/* import i18n from './languages/i18n.jsx'; */
/* import { useTranslation } from "react-i18next"; */


export default function App() {
/*   const { t } = useTranslation(); */
  return (
    /* <I18nextProvider i18n={i18n}> */
      <div className="App">
        <Header />
        <HeroArea />
        <h1 id="services" className="title">
          My services
        </h1>
        <p className="description">How I can help you</p>
        <Services />
        <h1 id="projects" className="title">
          My Projects
        </h1>
        <p className="description">Highlights of my best work</p>
        <Projects />
        <h1 id="about" className="title">
          About me
        </h1>
        <p className="description">My experience and education</p>
        <About />
        <h1 id="activities" className="title">
          Activities
        </h1>
        <p className="description">My interests and volunteering activities</p>
        <Activities />
        <h1 id="contact" className="title">
          Let us connect
        </h1>
        <p className="description">I am available to work!</p>
        <Contacts />
        <Footer />
      </div>
    /* </I18nextProvider> */
  );
}
