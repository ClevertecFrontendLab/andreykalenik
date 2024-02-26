import {useEffect, useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Typography, Grid } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

import { useLoginMutation, useCheckEmailMutation } from '@redux/reducers/authApi';
import { setUserData } from '@redux/reducers/userSlice';
import { AppLoader } from '@components/app-loader';
import { ROUTER_PATHS, TOKEN_ID, REGEXP_PASSWORD, REGEXP_EMAIL} from '@utils/constants';
import { selectUserData } from '@utils/selectors';

import styles from './LoginForm.module.scss'


type LoginFormData = {
  email: string,
  password: string,
  remember: boolean
}

export const LoginForm:React.FC = () =>{
  const [forgotDisabled, setForgotDisabled] = useState(true);
  const { Link } = Typography;
  const { useBreakpoint } = Grid;
  const {sm} = useBreakpoint()
  const [form] = Form.useForm();
  const [loginUser, { isLoading: isLoadingLogin }] = useLoginMutation();
  const [checkEmail, { isLoading: isLoadingEmail }] = useCheckEmailMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);

  const onFinish = (values: LoginFormData) => {
    loginUser({ email: values.email, password: values.password })
        .unwrap()
        .then((res) => {
            values.remember ? localStorage.setItem(TOKEN_ID, res.accessToken) : '';
            dispatch(setUserData({ email: values.email, password: values.password }));
            navigate(ROUTER_PATHS.MAIN);
        })
        .catch(() => navigate(ROUTER_PATHS.RESULT_ERROR_LOGIN, { state: ROUTER_PATHS.AUTH}));
    };

  const checkUserEmail = useCallback(
    (email: string) => {
        checkEmail({ email })
            .unwrap()
            .then(() => {
                navigate(ROUTER_PATHS.CONFIRM_EMAIL, { state: ROUTER_PATHS.AUTH });
            })
            .catch((error) => {
                if (error.status === 404 && error.data.message === 'Email не найден') {
                    navigate(ROUTER_PATHS.RESULT_ERROR_EMAIL_NO_EXIST, { state: ROUTER_PATHS.AUTH });
                } else {
                    dispatch(setUserData({ email, password: '' }));
                    navigate(ROUTER_PATHS.RESULT_ERROR_CHECK_EMAIL, { state: ROUTER_PATHS.AUTH });
                }
            });
    },[checkEmail, dispatch, navigate],);
    
    useEffect(() => {
        if (localStorage.getItem(TOKEN_ID)) {
            navigate(ROUTER_PATHS.MAIN);
        }
        if (location.state === ROUTER_PATHS.RESULT_ERROR_CHECK_EMAIL) {
          checkUserEmail(userData.email);
      }
    }, [checkUserEmail, location.state, navigate, userData.email]);  

    return(
      <>
        {(isLoadingLogin || isLoadingEmail) && <AppLoader />}
        <Form
          form={form}
          name="LoginForm"
          size='large'
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
          className={styles.loginForm}
        >
          <Form.Item
            name="email"
            className={styles.emailInput}
            data-test-id='login-email'
            rules={[
              {required: true,  message: '', type: 'email'},
              {
                validator: (_, value) => {
                    if (REGEXP_EMAIL.test(value)) {
                      dispatch(setUserData({ email: value, password: '' }))
                        return Promise.resolve(setForgotDisabled(false));
                    } else {
                        return Promise.reject(setForgotDisabled(true));
                    }
                },
            },
            ]}
          >
            <Input addonBefore="e-mail:"/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {required: true, message: ''},
              {pattern: REGEXP_PASSWORD, message: ''},
            ]}
          >
            <Input.Password placeholder='Пароль'  data-test-id='login-password'/>
          </Form.Item>
          <div className={styles.additionalActions}>
              <Form.Item 
                name="remember" 
                valuePropName="checked" 
                className={styles.formCheckbox}
              >
                <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
              </Form.Item>
              <Link 
                data-test-id='login-forgot-button'
                onClick={() => !forgotDisabled && checkUserEmail(userData.email)}
                style={sm ? {fontSize:17, fontOpticalSizing:'auto'} : {fontSize:14,fontOpticalSizing:'auto', marginRight:8}} 
                >
                  Забыли пароль?
              </Link>
          </div>
          <Form.Item style={{marginBottom:16}}>
          <Button
            type="primary" 
            htmlType="submit" 
            data-test-id='login-submit-button'
            onSubmit={(e) => e.preventDefault()}
            style={sm ? {width:'100%'}:{width:'100%', fontSize:14}}
            >
              Войти
            </Button>
          </Form.Item>
          <Form.Item className={styles.buttonGroup}>
            <Button htmlType="submit" style={sm ? {width:'100%', borderRadius:2, fontSize:16}:{width:'100%', borderRadius:2, fontSize:14}}>
              {sm ? <GooglePlusOutlined size={14}/>:null}
              Войти через Google
            </Button>
          </Form.Item>
        </Form>
      </>

    )
  
  }