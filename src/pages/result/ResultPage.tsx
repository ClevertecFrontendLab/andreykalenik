import { CheckCircleFilled, WarningFilled, CloseCircleFilled } from '@ant-design/icons';

import { ServiceBackground } from '@components/service-background';
import { ResultContent, ResultContent500 } from '@components/result-content';
import { Path } from '@utils/constants';

type ResultPageProps = {
    result:
        | 'success'
        | 'error'
        | 'error-user-exist'
        | 'error-login'
        | 'error-check-email-no-exist'
        | 'error-check-email'
        | 'error-change-password'
        | 'success-change-password';
};

export const ResultPage: React.FC<ResultPageProps> = ({ result }) => {
    return (
        <ServiceBackground>
            {(() => {
                switch (result) {
                    case 'success':
                        return (
                            <ResultContent
                                title='Регистрация успешна'
                                subtitle='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
                                buttonText='Войти'
                                testID='registration-enter-button'
                                redirectPath={Path.AUTH}
                                icon={
                                    <CheckCircleFilled
                                        style={{
                                            fontSize: 70,
                                            color: '#52C41A',
                                            display: 'block',
                                            padding: 5,
                                        }}
                                    />
                                }
                                style='default'
                            />
                        );
                    case 'error':
                        return (
                            <ResultContent
                                title='Данные не сохранились'
                                subtitle='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
                                buttonText='Назад к регистрации'
                                testID='registration-retry-button'
                                redirectPath={Path.REGISTRATION}
                                icon={
                                    <CloseCircleFilled
                                        style={{
                                            fontSize: 70,
                                            color: '#FF4D4F',
                                            display: 'block',
                                            padding: 5,
                                        }}
                                    />
                                }
                                style='default'
                            />
                        );
                    case 'error-user-exist':
                        return (
                            <ResultContent
                                title='Данные не сохранились'
                                subtitle='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
                                buttonText='Повторить'
                                testID='registration-back-button'
                                redirectPath={Path.REGISTRATION}
                                icon={
                                    <CloseCircleFilled
                                        style={{
                                            fontSize: 70,
                                            color: '#FF4D4F',
                                            display: 'block',
                                            padding: 5,
                                        }}
                                    />
                                }
                                style='default'
                            />
                        );
                    case 'error-login':
                        return (
                            <ResultContent
                                title='Вход не выполнен'
                                subtitle='Что-то пошло не так. Попробуйте еще раз'
                                buttonText='Повторить'
                                testID='login-retry-button'
                                redirectPath={Path.AUTH}
                                icon={
                                    <WarningFilled
                                        style={{
                                            fontSize: 70,
                                            color: '#FAAD14',
                                            display: 'block',
                                            padding: 5,
                                        }}
                                    />
                                }
                                style='default'
                            />
                        );
                    case 'error-check-email-no-exist':
                        return (
                            <ResultContent
                                title='Такой e-mail не зарегистрирован'
                                subtitle='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
                                buttonText='Попробовать снова'
                                testID='check-retry-button'
                                redirectPath={Path.AUTH}
                                icon={
                                    <CloseCircleFilled
                                        style={{
                                            fontSize: 70,
                                            color: '#FF4D4F',
                                            display: 'block',
                                            padding: 5,
                                        }}
                                    />
                                }
                                style='slim'
                            />
                        );
                    case 'error-check-email':
                        return <ResultContent500 />;
                    case 'error-change-password':
                        return (
                            <ResultContent
                                title='Данные не сохранились'
                                subtitle='Что-то пошло не так. Попробуйте ещё раз'
                                buttonText='Повторить'
                                testID='change-retry-button'
                                redirectPath={Path.CHANGE_PASSWORD}
                                icon={
                                    <CloseCircleFilled
                                        style={{
                                            fontSize: 70,
                                            color: '#FF4D4F',
                                            display: 'block',
                                            padding: 5,
                                        }}
                                    />
                                }
                                style='default'
                            />
                        );
                    case 'success-change-password':
                        return (
                            <ResultContent
                                title='Пароль успешно изменен'
                                subtitle='Теперь можно войти в аккаунт, используя свой логин и новый пароль'
                                buttonText='Вход'
                                testID='change-entry-button'
                                redirectPath={Path.AUTH}
                                icon={
                                    <CheckCircleFilled
                                        style={{
                                            fontSize: 70,
                                            color: '#52C41A',
                                            display: 'block',
                                            padding: 5,
                                        }}
                                    />
                                }
                                style='default'
                            />
                        );
                    default:
                        return null;
                }
            })()}
        </ServiceBackground>
    );
};
