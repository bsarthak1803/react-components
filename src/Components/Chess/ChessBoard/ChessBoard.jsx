import React, { memo } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ChessBoard.module.css";
import ChessBoardRow from "../ChessBoardRow/ChessBoardRow";

const ChessBoard = memo(({ data, handleClick }) => {
  return (
    <main className={styles.mainContainer}>
      {data.map((chessRow, index) => {
        return (
          <ChessBoardRow
            key={uuidv4()}
            rowDataArr={chessRow}
            handleClick={handleClick}
          />
        );
      })}
    </main>
  );
});

export default ChessBoard;
