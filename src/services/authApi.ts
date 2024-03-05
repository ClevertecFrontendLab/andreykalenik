import { api } from './api';
import { ApiEndpoint } from '@utils/constants';



type Request ={
    email: string;
    password: string;
    passwordConfirmed: string
    message: string;
    code: string;
}

type Response = {
    accessToken: string;
    email: string
    message : string
}


export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<Pick<Response, 'accessToken'>, Pick<Request,'email'|'password' >>({
            query: (body) => ({
                url: ApiEndpoint.LOGIN,
                method: 'POST',
                body,
            }),
        }),
        registration: build.mutation<object, Pick<Request,'email'|'password' >>({
            query: (body) => ({
                url: ApiEndpoint.REGISTRATION,
                method: 'POST',
                body,
            }),
        }),
        checkEmail: build.mutation<Pick<Response, 'email'|'message'>, Pick<Request,'email' >>({
            query: (body) => ({
                url: ApiEndpoint.CHECK_EMAIL,
                method: 'POST',
                body

            }),
        }),
        confirmEmail: build.mutation<Pick<Response, 'email'|'message'>, Pick<Request,'email'|'code' >>({
            query: (body) => ({
                url: ApiEndpoint.CONFIRM_EMAIL,
                method: 'POST',
                body,
            }),
        }),
        changePassord: build.mutation<Pick<Response, 'message'>, Pick<Request,'password'| 'passwordConfirmed' >>({
            query: (body) => ({
                url: ApiEndpoint.CHANGE_PASSWORD,
                method: 'POST',
                body,
            }), 
        }),
        GoogleAuth: build.query<{ accessToken: string }, null>({
            query: () => ({
                url: ApiEndpoint.GOOGLE_AUTH,
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

