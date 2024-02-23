import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/constants'



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




enum queryEndpoints {
    login = 'login',
    registration =  'registration',
    checkEmail = 'check-email',
    confirmEmail = 'confirm-email',
    changePassword = 'change-password',
}



export const authApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/auth/`,
        credentials: 'include',
        prepareHeaders: (headers) => {
                headers.set('accept', 'application/json',);
                headers.set('Content-Type', 'application/json');
            }
    }),
    endpoints: (build) => ({
        login: build.mutation<IResponseLogin, IRequestLogin>({
            query: (body) => ({
                url: queryEndpoints.login,
                method: 'POST',
                body,
            }),
        }),
        registration: build.mutation<object, IRequestLogin>({
            query: (body) => ({
                url: queryEndpoints.registration,
                method: 'POST',
                body,
            }),
        }),
        checkEmail: build.mutation<IResponseCheck, IRequestCheck>({
            query: (email) => ({
                url: queryEndpoints.checkEmail,
                method: 'POST',
                body: email,
            }),
        }),
        confirmEmail: build.mutation<IResponseConfirm, IRequestConfirm>({
            query: (body) => ({
                url: queryEndpoints.confirmEmail,
                method: 'POST',
                body,
            }),
        }),
        changePassord: build.mutation<IResponseChangePass, IRequestChangePass>({
            query: (body) => ({
                url: queryEndpoints.changePassword,
                method: 'POST',
                body,
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

