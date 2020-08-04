import * as ActionTypes from "./ActionTypes";

export const addComment = (dishId, author, rate, comment) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            author: author,
            rate: rate,
            comment: comment,
            dishId: dishId
        }
    }
}