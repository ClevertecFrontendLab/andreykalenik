export const REGEXP_PASSWORD =  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
export const REGEXP_EMAIL = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i


export const enum  VALIDATE_MESSAGE {
    PasswordInfo  = 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
    RepeatPassword = 'Пароли не совпадают',
}
