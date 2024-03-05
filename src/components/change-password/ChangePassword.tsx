import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

import { useChangePassordMutation } from '../../services/authApi';
import { setUserData } from '@redux/reducers/userSlice';
import { AppLoader } from '@components/app-loader';
import { CardAuth } from '@components/card-auth';
import { ServiceBackground } from '@components/service-background';
import { Path, REGEXP_PASSWORD, Validate_Message} from '@utils/constants';
import { selectUserData } from '@utils/selectors';

import styles from './ChangePassword.module.scss'


type ChangePasswordData =  {
    password: string,
    passwordConfirmed: string
}


export const ChangePassword: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();
    const [formValid, setFormValid] = useState(false)
    const [change, { isLoading }] = useChangePassordMutation();
    const [form] = Form.useForm();

    const onChange = () => {
        form.validateFields(['passwordConfirmed','password']).then(() => {
            setFormValid(false);
        }).catch(() => {
            setFormValid(true);
        })
    };

    const onFinish = useCallback(
        (values:ChangePasswordData) => {
            dispatch(setUserData({ email: userData.email, password: values.password, passwordConfirmed: '' }));
            change(values)
                .unwrap()
                .then(() =>
                    navigate(Path.RESULT_SUCCESS_CHANGE_PASSWORD, {
                        state: Path.CHANGE_PASSWORD
                    }),
                )
                .catch(() =>
                    navigate(Path.RESULT_ERROR_CHANGE_PASSWORD, { state: Path.CHANGE_PASSWORD }),
                );
        },
        [change, dispatch, navigate, userData.email],
    );

    useEffect(() => {
        if (location.state === Path.RESULT_ERROR_CHANGE_PASSWORD) {
            onFinish({ password: userData.password, passwordConfirmed: userData.password });
        } else if (
            location.state != Path.CONFIRM_EMAIL &&
            location.state != Path.RESULT_ERROR_CHANGE_PASSWORD
        ) {
            navigate(Path.AUTH);
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
                        help={Validate_Message.PasswordInfo}
                        rules={[
                            {
                                validator: (_, value) => {
                                    if (REGEXP_PASSWORD.test(value)) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject(new Error(Validate_Message.RepeatPassword));
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
                        name='passwordConfirmed'
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
