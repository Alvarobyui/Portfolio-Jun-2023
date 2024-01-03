import { useState } from "react";
import { ActivitiesContent } from "../content/activities";

import styles from "./Activities.module.css";

/* import leftArrowIcon from "../assets/actions/left-arrow.png";
import rightArrowIcon from "../assets/actions/right-arrow.png";
 */
export const Activities = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const activitiesData = ActivitiesContent();

  return (
    <section className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => {
          activeSlide
            ? setActiveSlide(activeSlide - 1)
            : setActiveSlide(activitiesData.length - 1);
        }}
      >
        <img
          className={styles.icon}
          src="/assets/actions/left-arrow.png"
          alt="left-arrow"
        />
      </button>
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>{activitiesData[activeSlide].title}</h2>
          <p className={styles.text}>{activitiesData[activeSlide].text}</p>
        </div>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          activeSlide + 1 < activitiesData.length
            ? setActiveSlide(activeSlide + 1)
            : setActiveSlide(0);
        }}
      >
        <img
          className={styles.icon}
          src="/assets/actions/right-arrow.png"
          alt="right-arrow"
        />
      </button>
    </section>
  );
};