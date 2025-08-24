import React, { useState, useCallback } from "react";
import "./CommentItem.css";

const CommentItem = React.memo(({ comment, onEdit, onReply, onUpvote, onDownvote, onDelete }) => {
  if (comment.deleted) return null;
  console.log(comment.id)
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleSaveEdit = () => {
    onEdit(comment.id, editText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditText(comment.text);
    setIsEditing(false);
  };

  const handleAddReply = () => {
    if (replyText.trim()) {
      onReply(replyText, comment.id);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <li className="comment-item">
      {!isEditing ? (
        <>
          <span className="comment-text">{comment.text}</span>
          <div className="comment-actions">
            <span className="comment-votes">Votes: {comment.votes}</span>
            <button className="action-btn" onClick={() => onUpvote(comment.id)}>Upvote</button>
            <button className="action-btn" onClick={() => onDownvote(comment.id)}>Downvote</button>
            <button className="action-btn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="action-btn" onClick={() => onDelete(comment.id)}>Delete</button>
            <button className="action-btn" onClick={() => setShowReplyInput(!showReplyInput)}>
              {showReplyInput ? "Cancel Reply" : "Reply"}
            </button>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="add-comment-input"
          />
          <button className="add-comment-btn" onClick={handleSaveEdit}>Save</button>
          <button className="action-btn" onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}

      {showReplyInput && (
        <div style={{ marginTop: "12px" }}>
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="add-comment-input"
            placeholder="Write your reply..."
          />
          <button className="add-comment-btn" onClick={handleAddReply}>Add Reply</button>
        </div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <ul className="reply-list">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              onEdit={onEdit}
              onDelete={onDelete}
              onReply={onReply}
              onUpvote={onUpvote}
              onDownvote={onDownvote}
            />
          ))}
        </ul>
      )}
    </li>
  );
})


export default CommentItem;