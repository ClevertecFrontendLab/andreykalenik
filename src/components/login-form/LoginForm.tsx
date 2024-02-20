import { Button, Checkbox, Form, Input, Typography, Grid } from 'antd';
import type { FormInstance } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './LoginForm.module.scss'

const SubmitButton = ({ form }: { form: FormInstance }) => {

    const { useBreakpoint } = Grid;
    const {sm} = useBreakpoint()
    const [submittable, setSubmittable] = React.useState(false);
    const values = Form.useWatch([], form);
    
  
    React.useEffect(() => {
      form.validateFields({ validateOnly: true }).then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
    }, [values]);
  
    return (
      <Button
       type="primary" 
       htmlType="submit" 
       data-test-id='login-submit-button'
       disabled={!submittable}
       style={sm ? {width:'100%'}:{width:'100%', fontSize:14}}
       >
        Войти
      </Button>
    );
  };
  

export const LoginForm:React.FC = () =>{

    const { Link } = Typography;
    const { useBreakpoint } = Grid;
    const {sm} = useBreakpoint()
    const [LoginForm] = Form.useForm();
    const regexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  
    return(
        <Form
          form={LoginForm}
          name="LoginForm"
          size='large'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ remember: false }}
          autoComplete="off"
          className={styles.loginForm}
        >
        <Form.Item
          label=""
          name="username"
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
            { pattern: regexp, message: ""}
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
            <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>
            <Link 
              data-test-id='login-forgot-button'
              style={sm ? {fontSize:17, fontOpticalSizing:'auto'}: {fontSize:14,fontOpticalSizing:'auto', marginRight:8}} 
              >
                Забыли пароль?
            </Link>
        </div>
  
  
        <Form.Item style={{marginBottom:16}}>
            <SubmitButton  form={LoginForm}/>
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