import React, { use, useReducer } from 'react'
import { useCallback } from 'react';
import { initialComments } from '../data/intialData'
import { reducer } from '../reducers';
function useCommentSection() {
    const [state, dispatch] = useReducer(reducer, initialComments);
    const handleAddComment = useCallback((text, id) => {
        if (text.trim()) {
            dispatch({ type: "ADD_COMMENT", payload: { text,id } });
        }
    }, []);
    const onEdit = useCallback((id, newText) => {
        dispatch({ type: 'ON_EDIT', payload: { id, newText } })
    }, [])
    const onReply = useCallback((text, id) => {
        if (text.trim()) {
            dispatch({ type: 'ON_REPLY', payload: { text, id } })
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
    return { handleAddComment, comments: state, onEdit, onDownvote, onUpvote, onDelete, onReply }
}

export default useCommentSection
