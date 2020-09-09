import * as ActionTypes from "./ActionTypes";


const initialState = {
    isLoading: true,
    errorMessage: null,
    leaders: []
}

export const LeadersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_LEADERS:
            return {isLoading: false, errorMessage: null, leaders: action.payload};
        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errorMessage: null};
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errorMessage: action.payload}
        default:
            return state;
    }
}