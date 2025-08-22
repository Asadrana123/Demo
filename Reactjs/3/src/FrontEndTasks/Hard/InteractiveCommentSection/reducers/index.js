import { updatedState } from "../helpers/helpers";
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.payload.newCmt];
        default:
            return updatedState(state, action.payload.id, action);
    }
}