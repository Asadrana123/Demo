import { updatedState } from "../helpers/helpers";
import { generateId, findReplyArray } from "../helpers/helpers";
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            const newCmt = {
                id: generateId(state, action.payload.id),
                text: action.payload.text,
                deleted: false,
                votes: 0,
                replies: []
            };
            return [...state, newCmt];
        case 'ON_REPLY':
            const replyArray = findReplyArray(state, action.payload.id);
            const newReply = {
                id: generateId(replyArray, action.payload.id),
                text: action.payload.text,
                deleted: false,
                votes: 0,
                replies: []
            };
            return updatedState(state, action.payload.id, { ...action, payload:{...action.payload,newReply} })
        default:
            return updatedState(state, action.payload.id, action);
    }
}