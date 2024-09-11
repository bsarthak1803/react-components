import React, { useState } from "react";
import StepperCircle from "./StepperCircle";
import { v4 as uuidV4 } from "uuid";
import styles from "./stepper.module.css";

const labels = [
  "Personal Info",
  "Work Experience",
  "Educational Qualification",
  "Terms and Conditions",
];

const Stepper = ({ stepsCount }) => {
  const [currInd, setCurrInd] = useState(-1);
  const resArr = Array.from({ length: stepsCount }, (ele, index) => {
    //constructing an array of length n with objects
    return {
      //each element is returned as an object
      stepNumber: index + 1,
      isVisited: index <= currInd ? true : false,
      label: labels[index],
    };
  });

  const handleNext = () => {
    setCurrInd((prevInd) => prevInd + 1);
  };

  const handleBack = () => {
    setCurrInd((prevInd) => prevInd - 1);
  };

  return (
    <main className={styles.mainContainer}>
      <section className={styles.stepperContainer}>
        {resArr.map((step, index) => {
          return <StepperCircle key={uuidV4()} {...step} />;
        })}
      </section>
      <section className={styles.btns}>
        <button onClick={handleNext} disabled={currInd >= resArr.length - 1}>
          Next
        </button>
        <button onClick={handleBack} disabled={currInd < 0}>
          Back
        </button>
      </section>
    </main>
  );
};

export default Stepper;
