import { useState } from "react";

const useCommentTree = (initialComments) => {
  const [comments, setComments] = useState(initialComments);

  const insertNode = (commentTree, commentId, content) => {
    commentTree?.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, content],
        };
      } else if (comment?.replies?.length > 0) {
        return {
          ...comment,
          content: insertNode(comment?.replies, commentId, content),
        };
      }
      return comment;
    });
  };

  const insertComment = (commentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      votes: 0,
      timestamp: new Date().toISOString(),
      replies: [],
    };
    if (commentId) {
      //if comment is already there then search for it
      setComments((prevComments) =>
        insertNode(prevComments, commentId, content)
      );
    } else {
      setComments((prevComments) => [...prevComments, newComment]);
    }
  };

  return { comments, insertComment };
};

export default useCommentTree;
