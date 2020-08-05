import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { DishesReducer } from "./dihesReducer";
import { PromotionsReducer } from "./promotionsReducer";
import { LeadersReducer } from "./leadersReducer";

export const configurateStore = () => {
    const store = createStore(
        combineReducers({
            dishes: DishesReducer,
            leaders: LeadersReducer,
            promotions: PromotionsReducer
        }),
        applyMiddleware(thunk, logger)
    );

    return store
}