import { Card, Tabs,  Button, Checkbox, Form, Input, Typography, Grid } from 'antd';
import type { FormInstance } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './EntryPage.module.scss'
import { LogoIcon } from '@components/project icons'
import { ServiceBackground } from '@components/service background'


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
     style={sm ? {width:'100%', borderRadius:2}:{width:'100%', borderRadius:2, fontSize:14}}
     >
      Войти
    </Button>
  );
};

const LoginForm:React.FC = () =>{

  const { Link } = Typography;
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ remember: false }}
        autoComplete="off"
        className={styles.form}
      >
      <Form.Item
        label="e-mail:"
        name="username"
        className={styles.emailInput}
        data-test-id='login-email'
        rules={[{required: true,  message: "", type: 'email'}]
      }
      >
        <Input style={{borderRadius:2}}/>
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
        <Input.Password placeholder='Пароль'  style={{borderRadius:2}} />
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
          <SubmitButton  form={form}/>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" style={sm ? {width:'100%', borderRadius:2}:{width:'100%', borderRadius:2, fontSize:14}}>
        {sm ? <GooglePlusOutlined size={14}/>:null}
          Войти через Google
        </Button>
      </Form.Item>
    </Form>
  )

}

export const EntryPage:React.FC = () =>{

    const { useBreakpoint } = Grid;
    const {sm} = useBreakpoint()

    return(
        <ServiceBackground>
            <Card 
                className={styles.contentWrapper} 
                style={sm ? { width: 539, height:742 , borderRadius: 2 , paddingBlockStart:64, paddingInline:85.5, border:'none'}:
                            { width: 328, height:612 , borderRadius: 2 , paddingBlockStart:32, paddingInline:16, border:'none'} }
                >   
                    <LogoIcon style={sm ? {width:309, height:76, position:'relative', left:29} : 
                                            {width:203, height:50, position:'relative', left:47}}/>

                        <Tabs 
                            tabBarStyle={{display:'flex', justifyContent:'space-between', marginBottom:24}}
                            className={styles.tabs}
                            size={sm ? 'large' :'middle'}
                            defaultActiveKey="1" 
                            items={[
                            {
                                label: `Вход`,
                                key: '1',
                                children: <LoginForm/>,

                            },
                            {
                                label: `Регистрация`,
                                key: '2',
                            },
                            ]}
                        />
            </Card>
      </ServiceBackground>
    )
}