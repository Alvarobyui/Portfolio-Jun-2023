import styles from "./HeroArea.module.css";
import myPhoto from "../assets/myphoto.png";
export const HeroArea = () => {
  return (
    <section className={styles.wrapper}>
      <img className={styles.profile} src={myPhoto} alt="profile" />
      <h1 className="title">Hi, I am Alvaro!</h1>
      <p className="description">
        An aspiring web frontend developer looking for a new role in tech
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
          My projects
        </button>
        <button
          className={`${styles.button} ${styles.hire}`}
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Hire me
        </button>
      </div>
    </section>
  );
};