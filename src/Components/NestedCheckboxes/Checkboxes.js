//Implement Nested Checkboxes with below JSON Data also in include Select ALL
//first render the object of the array and then call the renderCheckboxes again with child.children

import React, { useState, useId } from "react";

const data = [
  {
    label: "Parent1",
    id: 1,
    children: [
      {
        label: "Child p1.c1",
        id: 2,
      },
      {
        label: "Child p1.c2",
        id: 3,
      },
      {
        label: "Childp1.c3",
        id: 4,
      },
    ],
  },
  {
    label: "Parent2",
    id: 5,
    children: [
      {
        label: "Childp2.c1",
        id: 6,
      },
    ],
  },
];

const Checkboxes = () => {
  const [selectionObj, setSelectionObj] = useState({}); //to keep track of the selection of checkboxes
  const [allChecked, setAllChecked] = useState(false);
  const uniqueId = useId();

  const onChangeHandler = (_, id) => {
    let obj = selectionObj;
    if (obj[id] === undefined) obj[id] = true;
    else obj[id] = !obj[id];

    setSelectionObj((prevObj) => ({ ...prevObj, ...obj[id] }));
  };

  const onChangeAllHandler = () => {
    //toggle the allChecked bool
    setAllChecked((allChecked) => !allChecked);
  };

  const renderCheckboxes = (childrenArr = data) => {
    return (
      <>
        <ul key={`${uniqueId}-${childrenArr[0].id}`}>
          {childrenArr.map((child) => {
            return (
              <>
                <li key={child.id}>
                  <input
                    type="checkbox"
                    id={child.id}
                    value={child.label}
                    checked={selectionObj[child.id] || allChecked}
                    onChange={(e) => onChangeHandler(e, child.id)}
                  ></input>
                  <label htmlFor={child.id}>{child.label}</label>
                </li>
                <br />
                {"children" in child &&
                  child.children.length > 0 &&
                  renderCheckboxes(child.children)}
              </>
            );
          })}
        </ul>
      </>
    );
  };
  return (
    <>
      {renderCheckboxes()}
      <input
        type="checkbox"
        id="check-all"
        value="check all"
        onChange={onChangeAllHandler}
      ></input>
      <label htmlFor="check-all">Check All</label>
    </>
  );
};

export default Checkboxes;
