import { format } from 'date-fns';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '@redux/configure-store';
import { TOKEN_ID } from '@utils/constants';



const urlAPI = 'https://marathon-api.clevertec.ru';

export type Feedback = {
    id?: string;
    fullName: string | null;
    imageSrc: string | null;
    message: string | null;
    rating: number;
    createdAt: string;
    key?: string
}


export type NewFeedback = {
    message: string;
    rating: 0|1|2|3|4|5;
};


export const feedbackAPI = createApi({
    reducerPath: 'feedbackAPI',
    baseQuery: fetchBaseQuery({ baseUrl: urlAPI, prepareHeaders: (headers) => {
        const token = localStorage.getItem(TOKEN_ID) || store.getState().tokenReducer.token ;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }, }),
    tagTypes: ['Feedback'],
    endpoints: (build) => ({
        getFeedbacks: build.query<Feedback[], void>({
            query: () => ({
                url: '/feedback',
            }),
            transformResponse: (baseQueryReturnValue: Feedback[]) => {
                baseQueryReturnValue.sort(
                    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
                );

                return baseQueryReturnValue.map((item) => {
                    item.createdAt = format(item.createdAt, 'dd.MM.yyyy')
                    return item;
                });
            },
            providesTags: () => ['Feedback']
        }),
        createReview: build.mutation({
            query: (body) => ({
                url: '/feedback',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Feedback'],
        })
    }),
});

export const { useLazyGetFeedbacksQuery, useGetFeedbacksQuery, useCreateReviewMutation } = feedbackAPI;
