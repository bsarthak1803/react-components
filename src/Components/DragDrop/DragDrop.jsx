import React, { useId, useState } from "react";
import styles from "./DragDrop.module.css";

const issues = [
  {
    id: 1,
    title: "issue1",
  },
  {
    id: 2,
    title: "issue2",
  },
  {
    id: 3,
    title: "issue3",
  },
  {
    id: 4,
    title: "issue4",
  },
  {
    id: 5,
    title: "issue5",
  },
];

const DragDrop = () => {
  const [openIssues, setOpenIssues] = useState(issues);
  const [progressIssues, setProgressIssues] = useState([]);
  const [reviewIssues, setReviewIssues] = useState([]);
  const [doneIssues, setDoneIssues] = useState([]);
  const uniqueID = useId();

  const onDragStartHandler = (e, issueType, id) => {
    e.dataTransfer.setData("issueType", issueType);
    e.dataTransfer.setData("issueID", id);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
  };

  const onDropHandler = (e, issueTypeTarget) => {
    e.preventDefault();
    const issueType = e.dataTransfer.getData("issueType");
    const id = e.dataTransfer.getData("issueID");
    let issue;
    issue = issues.find((issue) => issue.id === parseInt(id));
    switch (issueTypeTarget) {
      case "open":
        setOpenIssues((prevState) => [...prevState, issue]);
        break;

      case "progress":
        setProgressIssues((prevState) => [...prevState, issue]);
        break;

      case "review":
        setReviewIssues((prevState) => [...prevState, issue]);
        break;

      case "done":
        setDoneIssues((prevState) => [...prevState, issue]);
        break;

      default:
        break;
    }
    let list2;
    switch (issueType) {
      case "open":
        list2 = openIssues;
        list2 = list2.filter((issue) => issue.id !== parseInt(id));
        setOpenIssues(list2);
        break;

      case "progress":
        list2 = progressIssues;
        list2 = list2.filter((issue) => issue.id !== parseInt(id));
        setProgressIssues(list2);
        break;

      case "review":
        list2 = reviewIssues;
        list2 = list2.filter((issue) => issue.id !== parseInt(id));
        setReviewIssues(list2);
        break;

      case "done":
        list2 = doneIssues;
        list2 = list2.filter((issue) => issue.id !== parseInt(id));
        setDoneIssues(list2);
        break;

      default:
        break;
    }
  };

  const renderList = (heading, issueType, issueList) => {
    return (
      <section>
        <h1>{heading}</h1>
        <ul
          className={styles.issueList}
          // dataissuetype={issueType}
          onDrop={(e) => onDropHandler(e, issueType)}
          onDragOver={onDragOverHandler}
        >
          {issueList.map(({ id, title }) => {
            return (
              <li
                key={`${id}-${title}-${uniqueID}`}
                draggable={true}
                onDragStart={(e) => onDragStartHandler(e, issueType, id)}
              >
                {title}
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  return (
    <main className={styles.mainList}>
      {renderList("Open issues", "open", openIssues)}
      {renderList("Progress issues", "progress", progressIssues)}
      {renderList("Review issues", "review", reviewIssues)}
      {renderList("Done issues", "done", doneIssues)}
    </main>
  );
};

export default DragDrop;
