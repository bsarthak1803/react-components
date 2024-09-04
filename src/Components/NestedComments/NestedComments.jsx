import { useState } from "react";
import useCommentTree from "../../hooks/useCommentTree";
import styles from "./NestedComments.module.css";
import Comment from "../Comment/Comment";

//onSubmit - for creating a new comment and replying to the existing comment
const NestedComments = ({ comments, onSubmit, onEdit, onDelete }) => {
  const { comments: commentData, insertComment } = useCommentTree(comments);

  const { comment, setComment } = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    if (comment) {
      //handle submit logic
      handleReply(null, comment);
      setComment("");
    }
  };

  const handleReply = (commentId, content) => {
    insertComment(commentId, content);
  };

  return (
    <main className={styles.mainContainer}>
      <section className={styles.addComment}>
        <textarea
          className={styles.commentText}
          rows={3}
          columns={50}
          name=""
          placeholder="Add a new comment here!!"
          onChange={handleChange}
        />
        <button className={styles.commentButton} onClick={handleSubmit}>
          Add Comment
        </button>
      </section>
      <section>
        {commentData?.map((comment) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              onSubmitComment={handleReply}
            />
          );
        })}
      </section>
    </main>
  );
};

export default NestedComments;
