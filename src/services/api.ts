import { RootState } from '@redux/configure-store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TOKEN_ID } from '@utils/constants';

const baseUrl = 'https://marathon-api.clevertec.ru';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const accessToken = (getState() as RootState).user.accessToken;
            const accessTokenSessionStorage = sessionStorage.getItem(TOKEN_ID)
            const accessTokenLocalStorage = localStorage.getItem(TOKEN_ID)
            if (accessToken) {
                headers.set('authorization', `Bearer ${accessToken}`);
            }
            if (accessTokenSessionStorage) {
                headers.set('authorization', `Bearer ${accessTokenSessionStorage}`);
            }
            if (accessTokenLocalStorage) {
                headers.set('authorization', `Bearer ${accessTokenLocalStorage}`);
            }
            return headers;
        },
    }),

    tagTypes: ['User', 'Feedbacks'],
    endpoints: () => ({}),
});
