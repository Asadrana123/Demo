export const updatedState = (state, id, action) => {
    if (id.length === 1) {
        return state.map((reply, index) => {
            if (String(index) === id[0]) {
                if (action.type === 'UPVOTE') return { ...reply, votes: reply.votes + 1 }
                if (action.type === 'DOWNVOTE') return { ...reply, votes: reply.votes - 1 }
                if (action.type === 'DELETE') return { ...reply, deleted: true }
                if (action.type === 'ON_EDIT') return { ...reply, text: action.payload.newText }
                if (action.type === 'ON_REPLY') return { ...reply, replies: [...reply.replies, action.payload.newCmt] }
            }
            return reply;
        })
    }
    return state.map((reply, index) => {
        if (String(index) === id[0]) {
            const upDatedReplies = updatedState(reply.replies, id.slice(1), action);
            return { ...reply, replies: upDatedReplies };
        }
        return reply
    })
}


export const generateId = (data, id = null) => {
    if (data.length === 0) return String(id + 0);
    const lastIndex = data.length - 1
    const lastId = data[lastIndex].id;
    let ans = 0;
    if (lastId.length === 1) ans = Number(lastId) + 1
    else {
        ans = lastId.slice(0, lastIndex) + (Number(lastId.slice(-1)) + 1);
    }
    return String(ans);
}