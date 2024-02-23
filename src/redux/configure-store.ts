import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import userReducer from './reducers/userSlice'
import { authApi } from './reducers/authApi';



const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

export const store = configureStore({

        reducer: combineReducers({
            user : userReducer,
            router: routerReducer,
            [authApi.reducerPath]: authApi.reducer,
        }),

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(routerMiddleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const history = createReduxHistory(store);