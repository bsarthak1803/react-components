import React from "react";
import styles from "./stepperCircle.module.css";

const StepperCircle = ({ stepNumber, isVisited, label }) => {
  return (
    <section className={styles.stepperCircleContainer}>
      <section
        className={styles.stepperCircle}
        style={{ backgroundColor: isVisited ? "#47b6ba" : "white" }}
      >
        <h2>{stepNumber}</h2>
      </section>
      <section>{label}</section>
    </section>
  );
};

export default StepperCircle;
