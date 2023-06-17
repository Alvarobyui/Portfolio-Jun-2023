import styles from "./Footer.module.css";
import twitterIcon from "../assets/socials/twitter.png"
import linkedinIcon from "../assets/socials/linkedin.png"
import githubIcon from "../assets/socials/github.png"

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Alvaro Diaz</h1>
      <p>Las Joyas, San Sebastián</p>
      <p>+51 924126535 | alvaro.m.diaz@gmail.com</p>
      <div className={styles.socials}>
        <img
          src={twitterIcon}
          alt="social-icon"
          className={styles.icon}
        />
        <img
          src={linkedinIcon}
          alt="social-icon"
          className={styles.icon}
        />
        <img
          src={githubIcon}
          alt="social-icon"
          className={styles.icon}
        />
      </div>
    </footer>
  );
};