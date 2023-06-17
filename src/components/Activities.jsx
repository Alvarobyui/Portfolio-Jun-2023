import { useState } from "react";
import { activities } from "../content/activities";

import styles from "./Activities.module.css";

import leftArrowIcon from "../assets/actions/left-arrow.png";
import rightArrowIcon from "../assets/actions/right-arrow.png";

export const Activities = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => {
          activeSlide
            ? setActiveSlide(activeSlide - 1)
            : setActiveSlide(activities.length - 1);
        }}
      >
        <img
          className={styles.icon}
          src={leftArrowIcon}
          alt=""
        />
      </button>
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>{activities[activeSlide].title}</h2>
          <p className={styles.text}>{activities[activeSlide].text}</p>
        </div>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          activeSlide + 1 < activities.length
            ? setActiveSlide(activeSlide + 1)
            : setActiveSlide(0);
        }}
      >
        <img
          className={styles.icon}
          src={rightArrowIcon}
          alt=""
        />
      </button>
    </section>
  );
};