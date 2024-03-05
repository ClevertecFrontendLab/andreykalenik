import { RootState } from '@redux/configure-store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://marathon-api.clevertec.ru';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl,
        prepareHeaders: (headers, {getState}) => {
        const accessToken = (getState() as RootState).user.accessToken
        if(accessToken){
            headers.set('authorization', `Bearer ${accessToken}`);
        }
        return headers;
    } }),
    
    tagTypes: ['User', 'Feedbacks'],
    endpoints: () => ({ }),
});

