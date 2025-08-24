import React from 'react'
import { useState } from 'react'

function CommentInput({ onAddComment, comments }) {
    const [newComment, setNewComment] = useState('');
    return (
        <div className="add-comment-row">
            <input
                className="add-comment-input"
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
            />
            <button className="add-comment-btn" onClick={() => {
                onAddComment(newComment);
                setNewComment('');
            }}>
                Add
            </button>
        </div>
    )
}

export default CommentInput