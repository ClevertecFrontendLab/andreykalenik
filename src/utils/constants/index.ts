export const TOKEN_ID = 'cfat';

export const REGEXP_PASSWORD = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const REGEXP_EMAIL = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;

export const enum Validate_Message {
    PasswordInfo = 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
    RepeatPassword = 'Пароли не совпадают',
}

export const enum Path {
    ROOT = '/',
    MAIN = '/main',
    FEEDBACKS = '/feedbacks',

    AUTH = '/auth',
    REGISTRATION = '/auth/registration',
    CONFIRM_EMAIL = '/auth/confirm-email',
    CHANGE_PASSWORD = '/auth/change-password',
    RESULT = '/result',
    RESULT_ERROR_LOGIN = 'error-login',
    RESULT_ERROR_USER_EXIST = 'error-user-exist',
    RESULT_ERROR = 'error',
    RESULT_SUCCESS = 'success',
    RESULT_ERROR_EMAIL_NO_EXIST = 'error-check-email-no-exist',
    RESULT_ERROR_CHECK_EMAIL = 'error-check-email',
    RESULT_ERROR_CHANGE_PASSWORD = 'error-change-password',
    RESULT_SUCCESS_CHANGE_PASSWORD = 'success-change-password',
}

export enum ApiEndpoint {
    REGISTRATION = 'auth/registration ',
    LOGIN = 'auth/login',
    CHECK_EMAIL = 'auth/check-email ',
    CONFIRM_EMAIL = 'auth/confirm-email ',
    CHANGE_PASSWORD = 'auth/change-password ',
    FEEDBACK = 'feedback',
    GOOGLE_AUTH = 'auth/google',
}

export enum StatusCode {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    FORBIDDEN = 403,
    METHOD_NOT_ALLOWED = 405,
    SERVER_ERROR = 500,
}
