import React, { useState, useEffect } from "react";

const VirtualizedList = ({ data, height, width, itemHeight }) => {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]); //this will cause re-render and update the list
  const visibleList = data.slice(indices[0], indices[1] + 1);

  const handleScroll = (e) => {
    const { scrollTop } = e.target; //by how much height the viewport has been scrolled
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };

  return (
    <main
      className="main-container"
      style={{
        height: height,
        width: width,
        backgroundColor: "grey",
        overflow: "auto",
      }}
      onScroll={handleScroll} //scroll on the main container
    >
      <section
        className="list"
        style={{
          height: data.length * itemHeight, //complete list length
          position: "relative",
        }}
      >
        {visibleList.map((listItem, index) => {
          return (
            <section
              className="list-item"
              key={index}
              style={{
                height: itemHeight,
                backgroundColor: "coral",
                borderTop: "5px solid grey",
                color: "white",
                textAlign: "center",
                position: "absolute",
                top: (indices[0] + index) * itemHeight, //shift the list items by startInd + curInd * height
                width: "100%",
              }}
            >
              {`Item ${listItem}`}
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default VirtualizedList;
