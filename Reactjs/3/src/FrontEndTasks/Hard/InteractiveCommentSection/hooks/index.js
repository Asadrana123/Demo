import React, { use, useReducer } from 'react'
import { useState, useCallback } from 'react';
import { initialComments } from '../data/intialData'
import { generateId } from '../helpers/helpers';
import { reducer } from '../reducers';
function useCommentSection() {
    const [state, dispatch] = useReducer(reducer, initialComments);
    const [newComment, setNewComment] = useState("");
    const handleAddComment = useCallback((targetedArray, text, id) => {
        if (text.trim()) {
            const newCmt = {
                id: generateId(targetedArray, id),
                text: text,
                deleted: false,
                votes: 0,
                replies: []
            };
            dispatch({ type: "ADD_COMMENT", payload: {newCmt} });
        }
    }, []);
    const onEdit = useCallback((id, newText) => {
        dispatch({ type: 'ON_EDIT', payload: { id, newText } })
    }, [])
    const onReply = useCallback((replyArray, text, id) => {
        if (text.trim()) {
            const newCmt = {
                id: generateId(replyArray, id),
                text: text,
                deleted: false,
                votes: 0,
                replies: []
            };
            dispatch({ type: 'ON_REPLY', payload: { newCmt, id } })
        }
    }, [])
    const onUpvote = useCallback((id) => {
        dispatch({ type: 'UPVOTE', payload: { id } })
    }, [])
    const onDownvote = useCallback((id) => {
        dispatch({ type: 'DOWNVOTE', payload: { id } })
    }, [])
    const onDelete = useCallback((id) => {
        dispatch({ type: 'DELETE', payload: { id } })
    }, [])
    return { handleAddComment, comments: state, setNewComment, onEdit, onDownvote, onUpvote, onDelete, onReply, newComment }
}

export default useCommentSection
