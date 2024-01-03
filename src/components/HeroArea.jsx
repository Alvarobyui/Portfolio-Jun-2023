import styles from "./HeroArea.module.css";
/* import myPhoto from "../assets/myphoto.png";
 */
import { useTranslation } from "react-i18next";

export const HeroArea = () => {
  const { t } = useTranslation("heroArea");
  return (
    <section className={styles.wrapper}>
      <img className={styles.profile} src="/assets/myphoto.png" alt="profile" />
      <h1 className="title">{t("title")}</h1>
      <p className="description">
      {t("description")}
      </p>
      <div className={styles.buttonBox}>
        <button
          className={`${styles.button} ${styles.project}`}
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("projects")}
        </button>
        <button
          className={`${styles.button} ${styles.hire}`}
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("hireMe")}
        </button>
      </div>
    </section>
  );
};