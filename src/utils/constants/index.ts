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
    CALENDARE = '/calendare',
    WORKOUTS = '/workouts',
    PROFILE = '/profile',
    ACHIEVEMENTS = '/achievements',

    AUTH = '/auth',
    REGISTRATION = '/auth/registration',
    CONFIRM_EMAIL = '/auth/confirm-email',
    CHANGE_PASSWORD = '/auth/change-password',

    RESULT_ERROR_LOGIN = '/result/error-login',
    RESULT_ERROR_USER_EXIST = '/result/error-user-exist',
    RESULT_ERROR = '/result/error',
    RESULT_SUCCESS = '/result/success',
    RESULT_ERROR_EMAIL_NO_EXIST = '/result/error-check-email-no-exist',
    RESULT_ERROR_CHECK_EMAIL = '/result/error-check-email',
    RESULT_ERROR_CHANGE_PASSWORD = '/result/error-change-password',
    RESULT_SUCCESS_CHANGE_PASSWORD = '/result/success-change-password',
}

export enum ApiEndpoint {
    REGISTRATION = 'auth/registration ',
    LOGIN = 'auth/login',
    CHECK_EMAIL = 'auth/check-email ',
    CONFIRM_EMAIL = 'auth/confirm-email ',
    CHANGE_PASSWORD = 'auth/change-password ',
    FEEDBACK = 'feedback',
    GOOGLE_AUTH = 'auth/google',
    CATALOGS_TRANING_LIST = '/catalogs/training-list',
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

export const DATE_FORMAT = 'DD.MM.YYYY';
export const DATE_FORMAT_DAY = 'DD';
