import React from "react";
import CommentItem from "./CommentItem";
import "./CommentsSection.css";
import CommentInput from "./CommentInput";

export default function CommentsSection({ comments, onAddComment, onEdit, onDelete, onReply, onUpvote, onDownvote }) {
  return (
    <div className="comments-container">
      <h2 className="comments-header">Comments Section</h2>
      <CommentInput onAddComment={onAddComment} comments={comments} />
      <ul className="comments-list">
        {comments.map((comment) => {
          if (comment.deleted === false) {
            return <CommentItem
              key={comment.id}
              comment={comment}
              onEdit={onEdit}
              onDelete={onDelete}
              onReply={onReply}
              onUpvote={onUpvote}
              onDownvote={onDownvote}
            />
          }
        }
        )}
      </ul>
    </div>
  );
}
