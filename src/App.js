import React, { useState, useEffect } from "react";
// import DragDrop from "./Components/DragDrop/DragDrop.jsx";
// import InfiniteScroll from "./Components/InfiniteScroll/InfiniteScroll.jsx";
// import Checkboxes from "./Components/NestedCheckboxes/Checkboxes";
// import SearchAutoComplete from "./Components/SearchAutoComplete/SearchAutoComplete";
// import ImageGallery from "./Components/ImageGallery/ImageGallery";
// import Form from "./Components/Form/Form.jsx";
// import CountDownTimer from "./Components/CountDownTimer/CountDownTimer.jsx";
// import ShoppingList from "./Components/ShoppingList/ShoppingList";
// import NestedComments from "./Components/NestedComments/NestedComments";
// import commentData from "./utils/commentData.json";
// import ChessBoard from "./Components/ChessBoard/ChessBoard.jsx";
import VirtualizedList from "./Components/VirtualizedList/VirtualizedList.jsx";

import { createData } from "./utils/data.js";

const data = createData();

const list = Array.from({ length: 1000 }, (_, index) => {
  return index + 1;
});

const App = () => {
  // const [chessData, setChessData] = useState(data);

  // const handleClick = (row, col) => {
  //   let possibleDest;
  //   //top-left
  //   if (row - 2 >= 0 && col - 1 >= 0) possibleDest = [row - 2, col - 1];
  //   //top-right
  //   else if (row - 2 >= 0 && col + 1 <= 7) possibleDest = [row - 2, col + 1];
  //   //bottom-left
  //   else if (row + 2 <= 7 && col - 1 >= 0) possibleDest = [row + 2, col - 1];
  //   //bottom-right
  //   else if (row + 2 <= 7 && col + 1 <= 7) possibleDest = [row + 2, col + 1];
  //   //right-down
  //   else if (row + 1 <= 7 && col + 2 <= 7) possibleDest = [row + 1, col + 2];
  //   //right-up
  //   else if (row - 1 >= 0 && col + 2 <= 7) possibleDest = [row - 1, col + 2];
  //   //left-down
  //   else if (row + 1 <= 7 && col - 2 >= 0) possibleDest = [row + 1, col - 2];
  //   //left-up
  //   else if (row - 1 >= 0 && col - 2 >= 0) possibleDest = [row - 1, col - 2];
  //   else possibleDest = [row, col]; //if nothing is valid then highlight same row and col

  //   if (possibleDest.length > 0) {
  //     let data = [...chessData];
  //     data.forEach((rowArr) => {
  //       rowArr.forEach((chessObj) => {
  //         if (
  //           chessObj.rowNum === possibleDest[0] &&
  //           chessObj.colNum === possibleDest[1]
  //         )
  //           chessObj.color = "red";
  //       });
  //     });
  //     setChessData(data);
  //   }
  // };

  return (
    <>
      {/* <DragDrop /> */}
      {/* <InfiniteScroll /> */}
      {/* <Checkboxes /> */}
      {/* <SearchAutoComplete /> */}
      {/* <ImageGallery /> */}
      {/* <Form /> */}
      {/* <CountDownTimer/> */}
      {/* <ShoppingList /> */}
      {/* <h1>Nested Comments System</h1>
      <NestedComments
        comments={commentData}
        onSubmit={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      /> */}
      {/* <ChessBoard data={chessData} handleClick={handleClick} />; */}
      <VirtualizedList data={list} height={500} width={300} itemHeight={35} />
    </>
  );
};

export default App;
