import React, { useState } from "react";
import CommentsSection from "./components/CommentsSection";
import useCommentSection from "./hooks";
export default function App() {
  const { comments, handleAddComment, onEdit, onDownvote, onUpvote, onDelete, onReply } = useCommentSection();
  return (
    <CommentsSection
      comments={comments}
      onAddComment={handleAddComment}
      onEdit={onEdit}
      onDownvote={onDownvote}
      onUpvote={onUpvote}
      onDelete={onDelete}
      onReply={onReply}
    />
  );
}
