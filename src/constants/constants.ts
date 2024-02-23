export const BASE_URL = 'https=//marathon-api.clevertec.ru'
export const LOCALSTORAGE_AUTH_TOKEN_KEY = 'cfat'

export const PASSWORD_REGEXP =  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

export enum ROUTER_PATHS  {
    
    ROOT =  '/',
    MAIN =  '/main',
    AUTH = '/auth',
    REGISTRATION = '/auth/registration',
    CONFIRM_EMAIL =  '/auth/confirm-email',
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

