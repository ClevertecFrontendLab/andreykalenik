import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input,  Grid } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

import { useRegistrationMutation } from '@redux/reducers/authApi';
import { AppLoader } from '@components/app-loader';
import { setUserData } from '@redux/reducers/userSlice';
import { ROUTER_PATHS, REGEXP_PASSWORD, VALIDATE_MESSAGE} from '@utils/constants';
import { selectUserData } from '@utils/selectors';

import styles from './RegForm.module.scss'


type RegFormData =  {
  email: string,
  password: string,
}

const { useBreakpoint } = Grid;


export const RegForm:React.FC = () =>{
const {sm} = useBreakpoint();
const [form] = Form.useForm();
const [, forceUpdate] = useState({});
const [reg, { isLoading }] = useRegistrationMutation();
const [formValid, setFormValid] = useState(false)
const navigate = useNavigate();
const location = useLocation();
const dispatch = useAppDispatch();
const  userData = useAppSelector(selectUserData);

const onChange = () => {
  form.validateFields(['email','password','confirm-password']).then(() => {
      setFormValid(false);
  }).catch(() => {
      setFormValid(true);
  })
};


const onFinish = useCallback(
  (values: RegFormData) => {
      reg({ email: values.email, password: values.password })
          .unwrap()
          .then(() => {
              navigate(ROUTER_PATHS.RESULT_SUCCESS, { state: ROUTER_PATHS.REGISTRATION });
          })
          .catch((error) => {
              if (error.status === 409) {
                  navigate(ROUTER_PATHS.RESULT_ERROR_USER_EXIST, {state: ROUTER_PATHS.REGISTRATION,});
              } else {
                  navigate(ROUTER_PATHS.RESULT_ERROR, { state: ROUTER_PATHS.REGISTRATION });
                  dispatch(setUserData(values));
              }
          });
  },
  [dispatch, navigate, reg],
);

    useEffect(() => {
      forceUpdate({});
      if (location.state === ROUTER_PATHS.RESULT_ERROR) {
          onFinish(userData);
         
      }
    }, [location.state, onFinish, userData]);

  
    return(
      <>
         {isLoading && <AppLoader/>}
        <Form
          form={form}
          name="basic"
          size='large'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onChange={onChange}
          autoComplete="off"
          className={styles.regForm}
        >
          <Form.Item
            label=""
            name="email"
            className={styles.emailInput}
            rules={[{required: true, message: '', type:'email', min: 0 }]
          }
          >
            <Input data-test-id='registration-email' addonBefore="e-mail:"/>
          </Form.Item>
        
          <Form.Item
            label=""
            name="password"
            help={VALIDATE_MESSAGE.PasswordInfo}
            rules={[
              {required: false, message: '' },
              {pattern: REGEXP_PASSWORD, message: ""}
            ]}
          >
            <Input.Password placeholder='Пароль' data-test-id='registration-password' />
          </Form.Item>
          
          <Form.Item
            label=""
            name="confirm-password"
            dependencies={['password']}
            rules={[
              {required: false, message: VALIDATE_MESSAGE.RepeatPassword },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(VALIDATE_MESSAGE.RepeatPassword));
                },
              }),
          ]}

          >
          <Input.Password placeholder='Повторите пароль'  data-test-id='registration-confirm-password' />
        </Form.Item>
        
  
        <Form.Item style={{marginBottom:16}}>
          <Button
            type="primary" 
            htmlType="submit" 
            disabled={formValid}
            data-test-id='registration-submit-button'
            style={sm ? {width:'100%'}:{width:'100%', fontSize:14}}
          >
              Войти
          </Button>
        </Form.Item>
  
        <Form.Item>
          <Button htmlType="submit" style={sm ? {width:'100%', fontSize:16 }:{width:'100%', fontSize:14}}>
          {sm ? <GooglePlusOutlined size={14}/>:null}
            Регистрация через Google
          </Button>
        </Form.Item>
      </Form>
      </>

    )
  
  }
  
