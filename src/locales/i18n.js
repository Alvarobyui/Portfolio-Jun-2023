import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./en/app.json";
import esTranslations from "./es/app.json";
import enAbout from "./en/about.json";
import esAbout from "./es/about.json";
import enActivities from "./en/activities.json";
import esActivities from "./es/activities.json";
import enNavbar from "./en/navbar.json";
import esNavbar from "./es/navbar.json";
import enHeroArea from "./en/heroArea.json";
import esHeroArea from "./es/heroArea.json";
import enServices from "./en/services.json";
import esServices from "./es/services.json";
import enContact from "./en/contact.json";
import esContact from "./es/contact.json";
import enProjects from "./en/projects.json";
import esProjects from "./es/projects.json";

const resources = {
  en: {
    translation: enTranslations,
    about: enAbout,
    activities: enActivities,
    navbar: enNavbar,
    heroArea: enHeroArea,
    services: enServices,
    contact: enContact,
    projects: enProjects,
  },
  es: {
    translation: esTranslations,
    about: esAbout,
    activities: esActivities,
    navbar: esNavbar,
    heroArea: esHeroArea,
    services: esServices,
    contact: esContact,
    projects: esProjects,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
