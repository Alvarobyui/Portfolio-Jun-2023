import styles from "./Services.module.css";

import { ServicesContent } from "../content/services";

export const Services = () => {
  const services = ServicesContent();
  return (
    <section className={styles.wrapper}>
      {services.map((service, index) => {
        return (
          <div className={styles.card} key={index}>
            <img className={styles.icon} src={service.icon} alt="icon" />
            <h2 className={styles.title}>{service.title}</h2>
            <p className={styles.description}>{service.description}</p>
          </div>
        );
      })}
    </section>
  );
};