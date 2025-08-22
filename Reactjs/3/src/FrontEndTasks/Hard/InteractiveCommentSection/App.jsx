import React, { useState } from "react";
import CommentsSection from "./components/CommentsSection";
import useCommentSection from "./hooks";
export default function App() {
  const { comments, newComment, setNewComment, handleAddComment, onEdit, onDownvote, onUpvote, onDelete, onReply } = useCommentSection();
  return (
    <CommentsSection
      comments={comments}
      newComment={newComment}
      setNewComment={setNewComment}
      onAddComment={handleAddComment}
      onEdit={onEdit}
      onDownvote={onDownvote}
      onUpvote={onUpvote}
      onDelete={onDelete}
      onReply={onReply}
    />
  );
}
