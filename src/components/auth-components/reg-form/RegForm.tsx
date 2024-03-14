import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input, Grid } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

import { useRegistrationMutation } from '../../../services/authApi';
import { AppLoader } from '@components/app-loader';
import { setUserData } from '@redux/reducers/userSlice';
import { Path, REGEXP_PASSWORD, Validate_Message } from '@utils/constants';
import { selectUserData } from '@utils/selectors';

import styles from './RegForm.module.scss';

type RegFormData = {
    email: string;
    password: string;
};

const { useBreakpoint } = Grid;

export const RegForm: React.FC = () => {
    const { sm } = useBreakpoint();
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const [reg, { isLoading }] = useRegistrationMutation();
    const [formValid, setFormValid] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const userData = useAppSelector(selectUserData);

    const onChange = () => {
        form.validateFields(['email', 'password', 'confirm-password'])
            .then(() => {
                setFormValid(false);
            })
            .catch(() => {
                setFormValid(true);
            });
    };

    const onFinish = useCallback(
        (values: RegFormData) => {
            reg({ email: values.email, password: values.password })
                .unwrap()
                .then(() => {
                    navigate(Path.RESULT_SUCCESS, { state: Path.REGISTRATION });
                })
                .catch((error) => {
                    if (error.status === 409) {
                        navigate(Path.RESULT_ERROR_USER_EXIST, { state: Path.REGISTRATION });
                    } else {
                        navigate(Path.RESULT_ERROR, { state: Path.REGISTRATION });
                        dispatch(
                            setUserData({
                                email: values.email,
                                password: values.password,
                                confirmPassword: '',
                            }),
                        );
                    }
                });
        },
        [dispatch, navigate, reg],
    );

    useEffect(() => {
        forceUpdate({});
        if (location.state === Path.RESULT_ERROR) {
            onFinish(userData);
        }
    }, [location.state, onFinish, userData]);

    return (
        <>
            {isLoading && <AppLoader />}
            <Form
                form={form}
                name='basic'
                size='large'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onChange={onChange}
                autoComplete='off'
                className={styles.regForm}
            >
                <Form.Item
                    label=''
                    name='email'
                    className={styles.emailInput}
                    rules={[{ required: true, message: '', type: 'email', min: 0 }]}
                >
                    <Input
                        data-test-id='registration-email'
                        addonBefore='e-mail:'
                        style={sm ? { fontSize: 16 } : { fontSize: 14 }}
                    />
                </Form.Item>

                <Form.Item
                    label=''
                    name='password'
                    help={Validate_Message.PasswordInfo}
                    rules={[
                        { required: false, message: '' },
                        { pattern: REGEXP_PASSWORD, message: '' },
                    ]}
                >
                    <Input.Password
                        placeholder='Пароль'
                        data-test-id='registration-password'
                        style={sm ? { fontSize: 16 } : { fontSize: 14 }}
                    />
                </Form.Item>

                <Form.Item
                    label=''
                    name='confirm-password'
                    dependencies={['password']}
                    rules={[
                        { required: false, message: Validate_Message.RepeatPassword },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error(Validate_Message.RepeatPassword));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        placeholder='Повторите пароль'
                        data-test-id='registration-confirm-password'
                        style={sm ? { fontSize: 16 } : { fontSize: 14 }}
                    />
                </Form.Item>

                <Form.Item style={{ marginBottom: 16 }}>
                    <Button
                        type='primary'
                        htmlType='submit'
                        disabled={formValid}
                        data-test-id='registration-submit-button'
                        style={sm ? { width: '100%' } : { width: '100%', fontSize: 14 }}
                    >
                        Войти
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType='submit'
                        style={
                            sm ? { width: '100%', fontSize: 16 } : { width: '100%', fontSize: 14 }
                        }
                    >
                        {sm ? <GooglePlusOutlined size={14} /> : null}
                        Регистрация через Google
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
