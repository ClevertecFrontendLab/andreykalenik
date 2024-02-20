import { Button, Form, Input,  Grid } from 'antd';
import type { FormInstance } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './RegForm.module.scss'

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
     disabled={!submittable}
     data-test-id='registration-submit-button'
     style={sm ? {width:'100%'}:{width:'100%', fontSize:14}}
     >
      Войти
    </Button>
  );
};

export const RegForm:React.FC = () =>{
    const { useBreakpoint } = Grid;
    const {sm} = useBreakpoint()
    const [form] = Form.useForm();
    const regexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
  
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  
    return(
        <Form
        form={form}
        name="basic"
        size='large'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles.regForm}
      >
        <Form.Item
          label=""
          name="username"
          data-test-id='registration-email'
          className={styles.emailInput}
          rules={[{required: true, message: '', type:'email' }]
        }
        >
          <Input addonBefore="e-mail:"/>
        </Form.Item>
  
        <Form.Item
          label=""
          name="password"
          data-test-id='registration-password'
          help="Пароль не менее 8 символов, с заглавной буквой и цифрой"
          rules={[
            {required: false, message: '' },
            { pattern: regexp, message: ""}
          ]}
          hasFeedback
        >
          <Input.Password placeholder='Пароль' style={{borderRadius:2}} />
        </Form.Item>
  
        <Form.Item
          label=""
          name="confirm-password"
          data-test-id='registration-confirm-password'
          rules={[
            {required: false, message: 'Пароли не совпадают' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Пароли не совпадают'));
              },
            }),
        ]}
          
        >
          <Input.Password placeholder='Повторите пароль' style={{borderRadius:2}} />
        </Form.Item>
        
  
        <Form.Item style={{marginBottom:16}}>
          <SubmitButton form={form}/>
        </Form.Item>
  
        <Form.Item>
          <Button htmlType="submit" style={sm ? {width:'100%', fontSize:16 }:{width:'100%', fontSize:14}}>
          {sm ? <GooglePlusOutlined size={14}/>:null}
            Регистрация через Google
          </Button>
        </Form.Item>
      </Form>
    )
  
  }
  