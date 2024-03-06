import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';

import { api } from '../services';
import userReducer from './reducers/userSlice';
import uiReducer from './reducers/uiSlice';
import feedbackReducer from './reducers/feedbackSlice';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

export const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
        router: routerReducer,
        ui: uiReducer,
        feedback: feedbackReducer,
        [api.reducerPath]: api.reducer,
    }),

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware, api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const history = createReduxHistory(store);
