import React from "react";
import DragDrop from "./Components/DragDrop/DragDrop.jsx";
import InfiniteScroll from "./Components/InfiniteScroll/InfiniteScroll.jsx";
import Checkboxes from "./Components/NestedCheckboxes/Checkboxes";
import SearchAutoComplete from "./Components/SearchAutoComplete/SearchAutoComplete";
import ImageGallery from "./Components/ImageGallery/ImageGallery";

const App = () => {
  return (
    <>
      {/* <DragDrop />
      <InfiniteScroll />
      <Checkboxes />
      <SearchAutoComplete /> */}
      <ImageGallery />
    </>
  );
};

export default App;
