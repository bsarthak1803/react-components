import React, { useState } from "react";
import styles from "./Comment.module.css";

const Comment = ({ comment = {}, onSubmitComment = () => {} }) => {
  const [expand, setExpand] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const handleReplyChange = (e) => {
    setReplyContent(e.target.value);
  };

  const handleReplySubmit = () => {
    if (replyContent) {
      onSubmitComment(comment.id, replyContent);
      setReplyContent("");
    }
  };
  return (
    <section className={styles.comment}>
      <p className={styles.content}>{comment.content}</p>
      <p className={styles.commentInfo}>{`Votes: ${comment.votes}`}</p>
      <p className={styles.commentInfo}>{`${new Date(
        comment.timestamp
      ).toLocaleString()}`}</p>

      <section className={styles.commentActions}>
        <button className={styles.commentButton} onClick={toggleExpand}>
          {expand ? `Hide Replies` : "Reply"}
        </button>
        <button className={styles.commentButton}>Edit</button>
        <button className={styles.commentButton}>Delete</button>
      </section>
      {expand && (
        <>
          <section className={styles.addComment}>
            <textarea
              className={styles.commentText}
              rows={3}
              columns={50}
              name=""
              placeholder="Add a new comment here!!"
              onChange={handleReplyChange}
              value={replyContent}
            />
            <button
              className={styles.commentButton}
              onClick={handleReplySubmit}
            >
              Add Comment
            </button>
          </section>
          {comment?.replies?.map((reply) => {
            //each comment/reply can further have infinite replies so render Comment recursively
            return (
              <Comment
                key={reply.id}
                comment={reply}
                onSubmitComment={onSubmitComment}
              />
            );
          })}
        </>
      )}
    </section>
  );
};

export default Comment;
