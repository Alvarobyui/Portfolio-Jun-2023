  import { Header } from "./components/Header";
  import { HeroArea } from "./components/HeroArea";
  import { About } from "./components/About";
  import { Services } from "./components/Services";
  import { Projects } from "./components/Projects";
  import { Activities } from "./components/Activities";
  import { Contacts } from "./components/Contacts";
  import { Footer } from "./components/Footer";

  import "./index.css";

  import { useTranslation } from 'react-i18next';
  // eslint-disable-next-line no-unused-vars
  import i18n from './locales/i18n';
  /* import { useTranslation } from "react-i18next"; */

  export default function App() {
    const { t, i18n } = useTranslation();

    return (
        <div className="App">
          <Header />
          <div className="language-switch">
            <p>
            Language:
            </p>
            <label className="switch">
              <input className="cb" type="checkbox" />
              <span className="toggle">
                <span className="left" onClick={() => i18n.changeLanguage('en')}>En</span>
                <span className="right" onClick={() => i18n.changeLanguage('es')}>Es</span>
              </span>
            </label>
          </div>
          <HeroArea />
          <h1 id="services" className="title">
            {t('MyServices')}
          </h1>
          <p className="description">{t('HowICanHelpYou')}</p>
          <Services />
          <h1 id= "projects" className="title">
            {t('MyProjects')}
          </h1>
          <p className="description">{t('HighlightsOfMyBestWork')}</p>
          <Projects />
          <h1 id="about" className="title">
            {t("AboutMe")}
          </h1>
          <p className="description">{t("MyExperienceAndEducation")}</p>
          <About />
          <h1 id="activities" className="title">
            {t("Activities")}
          </h1>
          <p className="description">{t("MyInterestsAndActivities")}</p>
          <Activities />
          <h1 id="contact" className="title">
            {t("LetUsConnect")}
          </h1>
          <p className="description">{t("IAmAvailableToWork")}</p>
          <Contacts />
          <Footer />
        </div>
    );
  }
