import React, { useState, useEffect } from "react";
import styles from "./CountDownTimer.module.css";

const CountDowntimer = () => {
  //state variables
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const onChangeHandler = (e) => {
    const count = parseInt(e.target.value);
    if (!isNaN(count)) {
      const mins = Math.floor(count / 60);
      const secs = count % 60; //remainder
      setMinutes(mins);
      setSeconds(secs);
    }
  };

  const onStartHandler = () => {
    setHasStarted(true);
  };

  const onPauseHandler = () => {
    setHasStarted(false);
    clearInterval(timerId);
  };

  const onResetHandler = () => {
    clearInterval(timerId);
    setSeconds(0);
    setMinutes(0);
  };

  const runTimer = () => {
    if (seconds > 0) setSeconds((secs) => secs - 1);
    else if (seconds === 0 && minutes > 0) {
      setMinutes((mins) => mins - 1);
      setSeconds(59);
    }
  };

  useEffect(() => {
    let tid = null;
    if (hasStarted) {
      tid = setInterval(() => {
        runTimer();
      }, 1000);
      setTimerId(tid);
    } else if (minutes <= 0 && seconds <= 0) {
      setMinutes(0);
      setSeconds(0);
      clearInterval(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [hasStarted, seconds, minutes]);

  return (
    <main className={styles.mainContainer}>
      <section className={styles.inputBox}>
        <input
          type="text"
          onChange={onChangeHandler}
          placeholder="enter time in seconds"
        ></input>
      </section>
      <section className={styles.buttonContainer}>
        <button onClick={onStartHandler}>START</button>
        <button onClick={onPauseHandler}>PAUSE</button>
        <button onClick={onResetHandler}>RESET</button>
      </section>
      <section className={styles.displayTimer}>
        <h3>{minutes}</h3>
        <h3>:</h3>
        <h3>{seconds}</h3>
      </section>
    </main>
  );
};

export default CountDowntimer;
