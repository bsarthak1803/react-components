import React, { memo } from "react";
import styles from "./ChessBox.module.css";

const ChessBox = memo(({ boxData, handleClick }) => {
  return (
    <section
      onClick={() =>
        handleClick(parseInt(boxData?.rowNum), parseInt(boxData?.colNum))
      }
      style={{ backgroundColor: `${boxData?.color}` }}
      className={styles.chessBox}
    ></section>
  );
});

export default ChessBox;
