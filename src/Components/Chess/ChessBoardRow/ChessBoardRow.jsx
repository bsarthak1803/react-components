import React, { memo } from "react";
import ChessBox from "../ChessBox/ChessBox";
import styles from "./ChessBoardRow.module.css";

const ChessBoardRow = memo(({ rowDataArr, handleClick }) => {
  return (
    <section className={styles.boardRow}>
      {rowDataArr.map((boxObj) => {
        return (
          <ChessBox
            key={boxObj.id}
            boxData={boxObj}
            handleClick={handleClick}
          />
        );
      })}
    </section>
  );
});

export default ChessBoardRow;
