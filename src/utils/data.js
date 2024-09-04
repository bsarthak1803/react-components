import { v4 as uuidv4 } from "uuid";

const rows = 8;
const cols = 8;

export const createData = () => {
  const dummyData = [];
  for (let i = 0; i < rows; i++) {
    const rowArr = [];
    for (let j = 0; j < cols; j++) {
      let obj = {
        id: uuidv4(),
        rowNum: i,
        colNum: j,
        color: (i + j) % 2 === 0 ? "white" : "black",
      };
      rowArr.push(obj);
    }
    dummyData.push(rowArr);
  }
  return dummyData;
};
