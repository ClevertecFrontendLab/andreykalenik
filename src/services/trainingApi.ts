import type { Moment } from 'moment';
import { CurrentTraining } from '@redux/reducers/trainingSlice';

import { api } from '.';
import { Nullebel } from '@types/commonTypes';

export type ErrorTypes = {
    status: number;
    data: {
        statusCode: number;
        error: string;
        message: string;
    };
};

type TrainingParameters = {
    repeat: boolean;
    period: number;
    jointTraining: boolean;
    participants: [string];
};

export type ExercisesItem = {
    name: string;
    replays: number;
    weight: number;
    approaches: number;
    _id?: string;
    isImplementation?: boolean;
};

export type TrainingResponse = ErrorTypes & {
    _id: string;
    name: string;
    date: string;
    isImplementation: boolean;
    userId: string;
    parameters: TrainingParameters;
    exercises: ExercisesItem[];
};

export type TrainingEditData = {
    name: Nullebel<string>;
    date: Moment;
    exercises: Nullebel<CurrentTraining[]>;
    isImplementation?: boolean;
};

export const trainingApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUserTrainingData: build.query<TrainingResponse[], void>({
            query: () => '/training',
        }),
        addUserTraining: build.mutation<
            TrainingResponse,
            {
                name: Nullebel<string>;
                date: Moment;
                exercises: Nullebel<CurrentTraining[]>;
            }
        >({
            query: (body) => ({
                url: '/training',
                method: 'POST',
                body: body,
            }),
        }),
        editUserTraining: build.mutation<
            TrainingResponse,
            { trainingId: string; body: TrainingEditData }
        >({
            query: ({ trainingId, body }) => ({
                url: `/training/${trainingId}`,
                method: 'PUT',
                body,
            }),
        }),
    }),
});

export const {
    useLazyGetUserTrainingDataQuery,
    useGetUserTrainingDataQuery,
    useAddUserTrainingMutation,
    useEditUserTrainingMutation,
} = trainingApi;
