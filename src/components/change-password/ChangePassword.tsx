import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

import { useChangePassordMutation } from '@redux/reducers/authApi';
import { setUserData } from '@redux/reducers/userSlice';
import { AppLoader } from '@components/app-loader';
import { CardAuth } from '@components/card-auth';
import { ServiceBackground } from '@components/service-background';
import { ROUTER_PATHS, REGEXP_PASSWORD, VALIDATE_MESSAGE} from '@utils/constants';

import styles from './ChangePassword.module.scss'


type ChangePasswordData =  {
    password: string,
    confirmPassword: string
}


export const ChangePassword: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userData = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [formValid, setFormValid] = useState(false)
    const [change, { isLoading }] = useChangePassordMutation();
    const [form] = Form.useForm();

    const onChange = () => {
        form.validateFields(['confirmPassword','password']).then(() => {
            setFormValid(false);
        }).catch(() => {
            setFormValid(true);
        })
    };

    const onFinish = useCallback(
        (values:ChangePasswordData) => {
            dispatch(setUserData({ email: userData.email, password: values.password }));
            change(values)
                .unwrap()
                .then(() =>
                    navigate(ROUTER_PATHS.RESULT_SUCCESS_CHANGE_PASSWORD, {
                        state: ROUTER_PATHS.CHANGE_PASSWORD
                    }),
                )
                .catch(() =>
                    navigate(ROUTER_PATHS.RESULT_ERROR_CHANGE_PASSWORD, { state: ROUTER_PATHS.CHANGE_PASSWORD }),
                );
        },
        [change, dispatch, navigate, userData.email],
    );

    useEffect(() => {
        if (location.state === ROUTER_PATHS.RESULT_ERROR_CHANGE_PASSWORD) {
            onFinish({ password: userData.password, confirmPassword: userData.password });
        } else if (
            location.state != ROUTER_PATHS.CONFIRM_EMAIL &&
            location.state != ROUTER_PATHS.RESULT_ERROR_CHANGE_PASSWORD
        ) {
            navigate(ROUTER_PATHS.AUTH);
        }
    }, [location.state, navigate, onFinish, userData.password]);

    
    useEffect(() =>{
        setFormValid(false)
      },[])

    return (
        <ServiceBackground>
            {isLoading && <AppLoader />}
            <CardAuth>
                <Form
                    name='normal_registration'
                    className={styles.form}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onChange={onChange}
                >
                    <Form.Item>
                        <h3 className={styles.title}>
                            Восстановление аккауанта
                        </h3>
                    </Form.Item>
                    <Form.Item
                        name='password'
                        help={VALIDATE_MESSAGE.PasswordInfo}
                        rules={[
                            {
                                validator: (_, value) => {
                                    if (REGEXP_PASSWORD.test(value)) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject(new Error(VALIDATE_MESSAGE.RepeatPassword));
                                    }
                                },
                            },
                        ]}
                    >
                        <Input.Password

                            type='password'
                            placeholder='Пароль'
                            data-test-id='change-password'
                        />
                    </Form.Item>
                    <Form.Item
                        name='confirmPassword'
                        dependencies={['password']}
                        rules={[
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject(
                                            new Error('validateMessage.repeatPassword'),
                                        );
                                    }
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            type='password'
                            placeholder='Повторите пароль'
                            data-test-id='change-confirm-password'
                        />
                    </Form.Item>

                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                type='primary'
                                block= {true}
                                disabled={formValid}
                                data-test-id='change-submit-button'
                                htmlType='submit'
                            >
                                Сохранить
                            </Button>
                        )}
                    </Form.Item>
                </Form>
            </CardAuth>
        </ServiceBackground>
    );
};
