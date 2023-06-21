import styles from "./Footer.module.css";
import whatsappIcon from "../assets/socials/whatsapp.png";
import linkedinIcon from "../assets/socials/linkedin.png";
import githubIcon from "../assets/socials/github.png";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Alvaro Diaz</h1>
      <p>Las Joyas, San Sebastián</p>
      <p>+51 924126535 | alvaro.m.diaz@gmail.com</p>
      <div className={styles.socials}>
        <a href="https://github.com/Alvarobyui" target="blank">
          <img src={githubIcon} alt="social-icon" className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/alvaro-diaz-andia-a8a823232/" target="blank">
          <img src={linkedinIcon} alt="social-icon" className={styles.icon} />
        </a>
        <a href="https://wa.me/51924126535" target="blank">
          <img src={whatsappIcon} alt="social-icon" className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};
