import React, {useEffect, useState } from 'react';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Typography, Grid } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useLoginMutation } from '@redux/reducers/authApi';
import { setUserData } from '@redux/reducers/userSlice';
import { AppLoader } from '@components/app-loader';
import { ROUTER_PATHS, LOCALSTORAGE_AUTH_TOKEN_KEY, REGEXP_PASSWORD} from '@constants/constants';
import styles from './LoginForm.module.scss'



export interface IValuesLoginForm {
  email: string,
  password: string,
  remember: boolean
}

export const LoginForm:React.FC = () =>{
  
  const { Link } = Typography;
  const { useBreakpoint } = Grid;
  const {sm} = useBreakpoint()
  const [form] = Form.useForm();
  const [loginUser, { isLoading: isLoadingLogin }] = useLoginMutation();
  const [formValid, setFormValid] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const onFinish = (values: IValuesLoginForm) => {
    loginUser({ email: values.email, password: values.password })
        .unwrap()
        .then((res) => {
            values.remember ? localStorage.setItem(LOCALSTORAGE_AUTH_TOKEN_KEY, res.accessToken) : '';
            dispatch(setUserData({ email: values.email, password: values.password }));
            navigate(ROUTER_PATHS.MAIN);
        })
        .catch(() => navigate(ROUTER_PATHS.RESULT_ERROR_LOGIN, { state: ROUTER_PATHS.AUTH}));
    };

  const onChange = () => {
      form.validateFields(['email','papassword']).then(() => {
          setFormValid(false);
      }).catch(() => {
          setFormValid(true);
      })
  };

    
    useEffect(() => {
        if (localStorage.getItem(LOCALSTORAGE_AUTH_TOKEN_KEY)) {
            navigate(ROUTER_PATHS.MAIN);
        }
    }, [location.state, navigate]);  

    useEffect(() =>{
      setFormValid(false)
    },[])

  
    return(
      <>
        {isLoadingLogin && <AppLoader />}
        <Form
          form={form}
          name="LoginForm"
          size='large'
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
          onChange={onChange}
          className={styles.loginForm}
        >
          <Form.Item
            name="email"
            className={styles.emailInput}
            data-test-id='login-email'
            rules={[{required: true,  message: "", type: 'email'}]}
          >
            <Input addonBefore="e-mail:"/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {required: true, message: ""},
              {pattern: REGEXP_PASSWORD, message: ""},

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
            disabled={formValid}
            // onClick={}
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