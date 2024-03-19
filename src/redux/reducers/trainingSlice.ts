import { createSlice } from '@reduxjs/toolkit';

import { TrainingResponse } from '../../services/trainingApi';
import { Nullebel } from '@types/commonTypes';

type EditTrainingType = 'future-training' | 'past-training';

export type EditTrainingInfo = {
    type: EditTrainingType;
    id: string;
} | null;

export type CurrentTraining = {
    name: string;
    approaches: number;
    weight: number;
    replays: number;
};

type InitialState = {
    userTrainingList: TrainingResponse[];
    userTrainingListError: Nullebel<string>;
    isModalVisible: boolean;
    isEditMode: boolean;
    editTraining: EditTrainingInfo;
    isDrawerVisible: boolean;
    typeTraining: Nullebel<string>;
    currentTraining: Nullebel<CurrentTraining[]>;
};

const initialState: InitialState = {
    userTrainingList: [],
    userTrainingListError: null,
    isModalVisible: false,
    isEditMode: false,
    editTraining: null,
    isDrawerVisible: false,
    typeTraining: null,
    currentTraining: null,
};

const trainingSlice = createSlice({
    name: 'TRAINING_SLICE',
    initialState,
    reducers: {
        setUserTrainingList: (state, action) => {
            state.userTrainingList = action.payload;
        },
        setModalVisible: (state, action) => {
            state.isModalVisible = action.payload;
        },
        setEditMode: (state, action) => {
            state.isEditMode = action.payload;
        },
        setEditTraining: (state, action) => {
            state.editTraining = action.payload;
        },
        setDrawerVisible: (state, action) => {
            state.isDrawerVisible = action.payload;
        },
        setTypeTraining: (state, action) => {
            state.typeTraining = action.payload;
        },
        setCurrentTraining: (state, action) => {
            state.currentTraining = action.payload;
        },
        resetEditMode: (state) => {
            Object.assign(state, {
                isEditMode: initialState.isEditMode,
                typeTraining: initialState.typeTraining,
                currentTraining: initialState.currentTraining,
            });
        },
        resetState: (state) => {
            Object.assign(state, {
                ...initialState,
                userTrainingList: state.userTrainingList,
            });
        },
    },
});

const { actions, reducer: reducerTraining } = trainingSlice;

export const {
    setUserTrainingList,
    setModalVisible,
    setEditMode,
    setEditTraining,
    setDrawerVisible,
    setTypeTraining,
    setCurrentTraining,
    resetEditMode,
    resetState,
} = actions;

export default reducerTraining;
