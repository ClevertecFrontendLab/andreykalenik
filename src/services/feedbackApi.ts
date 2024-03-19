import { format } from 'date-fns';

import { api } from '.';
import { ApiEndpoint } from '@utils/constants';
import { Nullebel } from '@types/commonTypes';

export type Feedback = {
    fullName: Nullebel<string>;
    imageSrc: Nullebel<string>;
    message: Nullebel<string>;
    rating: number;
    createdAt: string;
    key?: string;
    id?: string;
};

export type NewFeedback = {
    message: string;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
};

export const feedbackAPI = api.injectEndpoints({
    endpoints: (build) => ({
        getFeedbacks: build.query<Feedback[], void>({
            query: () => ({
                url: ApiEndpoint.FEEDBACK,
            }),
            transformResponse: (baseQueryReturnValue: Feedback[]) => {
                baseQueryReturnValue.sort(
                    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
                );

                return baseQueryReturnValue.map((item) => {
                    item.createdAt = format(item.createdAt, 'dd.MM.yyyy');
                    return item;
                });
            },
        }),
        addReview: build.mutation({
            query: (body) => ({
                url: ApiEndpoint.FEEDBACK,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLazyGetFeedbacksQuery, useGetFeedbacksQuery, useAddReviewMutation } = feedbackAPI;
