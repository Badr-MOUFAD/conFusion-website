//import { PROMOTIONS } from "../shared/promotions";
import * as ActionTypes from "./ActionTypes";

const intialState = {
    isLoading: true,
    errorMessage: null,
    promotions: []
}

export const PromotionsReducer = (state = intialState, action) => {
    switch(action.type) {
        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errorMessage: null}
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errorMessage: action.payload}
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errorMessage: null, promotions: action.payload}
        default:
            return state;
    }
}