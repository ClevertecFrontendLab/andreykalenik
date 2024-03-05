import { format } from 'date-fns';

import { api } from '.';
import { ApiEndpoint } from '@utils/constants';

export type Feedback = {
    id?: string;
    fullName: string | null;
    imageSrc: string | null;
    message: string | null;
    rating: number;
    createdAt: string;
    key?: string;
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
