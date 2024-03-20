import { createSlice } from '@reduxjs/toolkit';

export type CatalogTrainingList = {
    name: string;
    key: string;
};

type TInitialState = {
    catalogTrainingList: CatalogTrainingList[];
};

const initialState: TInitialState = {
    catalogTrainingList: [],
};

const catalogsSlice = createSlice({
    name: 'catalogs',
    initialState,
    reducers: {
        setCatalogTrainingList: (state, action) => {
            state.catalogTrainingList = action.payload;
        },
    },
});

const { actions, reducer: reducerCatalogs } = catalogsSlice;

export const { setCatalogTrainingList } = actions;

export default reducerCatalogs;
