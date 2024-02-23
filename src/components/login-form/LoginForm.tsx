import { Button, Checkbox, Form, Input, Typography, Grid } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import React, {useState}  from 'react';
import styles from './LoginForm.module.scss'
import {  PASSWORD_REGEXP} from '@constants/constants';
import {useDispatch } from 'react-redux'






export const LoginForm:React.FC = () =>{

    const { Link } = Typography;
    const { useBreakpoint } = Grid;
    const {sm} = useBreakpoint()
    const [form] = Form.useForm();
    const [rememberUser, setRememerUser] = useState(false)
    const dispath = useDispatch()



    const values = Form.useWatch(['email', 'password'], form);

    const checkboxHendler = () => setRememerUser(!rememberUser)

    const onFinish = async(values: any) => { console.log('none')}

  
  
  
    return(
        <Form
          form={form}
          name="LoginForm"
          size='large'
          initialValues={{ remember: false }}
          autoComplete="off"
          onFinish={onFinish}
          className={styles.loginForm}
        >
        <Form.Item
          label=""
          name="email"
          className={styles.emailInput}
          data-test-id='login-email'
          rules={[{required: true,  message: "", type: 'email'}]
        }
        >
          <Input addonBefore="e-mail:"/>
        </Form.Item>
  
        <Form.Item
          label=""
          name="password"
          data-test-id='login-password'
          rules={[
            {required: true, message: ""},
            { pattern: PASSWORD_REGEXP, message: ""}
          ]}
        >
          <Input.Password placeholder='Пароль'/>
        </Form.Item>
        
        <div className={styles.additionalActions}>
            <Form.Item 
              name="remember" 
              valuePropName="checked" 
              data-test-id='login-remember'
              className={styles.formCheckbox} >
            <Checkbox onChange={checkboxHendler}>Запомнить меня</Checkbox>
            </Form.Item>
            <Link 
              data-test-id='login-forgot-button'
              style={sm ? {fontSize:17, fontOpticalSizing:'auto'}: {fontSize:14,fontOpticalSizing:'auto', marginRight:8}} 
              >
                Забыли пароль?
            </Link>
        </div>
  
  
        <Form.Item style={{marginBottom:16}}>
        <Button
          type="primary" 
          htmlType="submit" 
          data-test-id='login-submit-button'
          style={sm ? {width:'100%'}:{width:'100%', fontSize:14}}
          >
            Войти
          </Button>
        </Form.Item>
  
        <Form.Item className={styles.buttonGroup}>
          <Button htmlType="submit" style={sm ? {width:'100%', borderRadius:2}:{width:'100%', borderRadius:2, fontSize:14}}>
          {sm ? <GooglePlusOutlined size={14}/>:null}
            Войти через Google
          </Button>
        </Form.Item>
      </Form>
    )
  
  }