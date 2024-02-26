import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


type Request ={
    email: string;
    password: string;
    confirmPassword: string
    message: string;
    code: string;
}

type Response = {
    accessToken: string;
    email: string
    message : string
}


const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
};


export const authApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://marathon-api.clevertec.ru/',
        credentials: 'include',
    }),
    tagTypes: ['Auth'],
    endpoints: (build) => ({
        login: build.mutation<Pick<Response, 'accessToken'>, Pick<Request,'email'|'password' >>({
            query: ({email, password}) => ({
                url: '/auth/login',
                method: 'POST',
                body: {email, password},
            }),
        }),
        registration: build.mutation<object, Pick<Request,'email'|'password' >>({
            query: (body) => ({
                url: '/auth/registration',
                method: 'POST',
                body,
                headers: headers,
            }),
        }),
        checkEmail: build.mutation<Pick<Response, 'email'|'message'>, Pick<Request,'email' >>({
            query: (email) => ({
                url: '/auth/check-email',
                method: 'POST',
                body: email,
                headers: headers,
            }),
        }),
        confirmEmail: build.mutation<Pick<Response, 'email'|'message'>, Pick<Request,'email'|'code' >>({
            query: (body) => ({
                url: '/auth/confirm-email',
                method: 'POST',
                body,
                headers: headers,
            }),
        }),
        changePassord: build.mutation<Pick<Response, 'message'>, Pick<Request,'password'| 'confirmPassword' >>({
            query: (body) => ({
                url: '/auth/change-password',
                method: 'POST',
                body,
                headers: headers,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useRegistrationMutation,
    useCheckEmailMutation,
    useConfirmEmailMutation,
    useChangePassordMutation,
} = authApi;

