import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export interface IRequestLogin {
    email: string;
    password: string;
}

export interface IResponseLogin {
    accessToken: string;
}

export interface IRequestCheck {
    email: string;
}

export interface IResponseCheck {
    email: string;
    message: string;
}

export interface IRequestConfirm {
    email: string;
    code: string;
}

export interface IResponseConfirm {
    email: string;
    message: string;
}

export interface IRequestChangePass {
    password: string;
    confirmPassword: string;
}

export interface IResponseChangePass {
    message: string;
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
        login: build.mutation<IResponseLogin, IRequestLogin>({
            query: ({email, password}) => ({
                url: '/auth/login',
                method: 'POST',
                body: {email, password},
            }),
        }),
        registration: build.mutation<object, IRequestLogin>({
            query: (body) => ({
                url: '/auth/registration',
                method: 'POST',
                body,
                headers: headers,
            }),
        }),
        checkEmail: build.mutation<IResponseCheck, IRequestCheck>({
            query: (email) => ({
                url: '/auth/check-email',
                method: 'POST',
                body: email,
                headers: headers,
            }),
        }),
        confirmEmail: build.mutation<IResponseConfirm, IRequestConfirm>({
            query: (body) => ({
                url: '/auth/confirm-email',
                method: 'POST',
                body,
                headers: headers,
            }),
        }),
        changePassord: build.mutation<IResponseChangePass, IRequestChangePass>({
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

