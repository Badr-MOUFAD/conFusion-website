import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const configurateStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store
}