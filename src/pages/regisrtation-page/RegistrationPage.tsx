import { Card, Tabs,  Button, Form, Input,Grid } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './RegistrationPage.module.scss'
import { LogoIcon } from '@components/project icons'
import { ServiceBackground } from '@components/service background'
import type { FormInstance } from 'antd';

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
     style={sm ? {width:'100%', borderRadius:2}:{width:'100%', borderRadius:2, fontSize:14}}
     >
      Войти
    </Button>
  );
};

const Registration:React.FC = () =>{
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
        className={styles.form}
      >
        <Form.Item
          label="e-mail:"
          name="username"
          data-test-id='registration-email'
          className={styles.emailInput}
          rules={[{required: true, message: '', type:'email' }]
        }
        >
          <Input style={{borderRadius:2}}/>
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
          <Button htmlType="submit" style={sm ? {width:'100%', borderRadius:2, fontSize:16 }:{width:'100%', borderRadius:2, fontSize:14}}>
          {sm ? <GooglePlusOutlined size={14}/>:null}
            Регистрация через Google
          </Button>
        </Form.Item>
      </Form>
    )

}




export const RegistrationPage:React.FC = () =>{

    const { useBreakpoint } = Grid;
    const {sm} = useBreakpoint()

    return(
        <ServiceBackground>
            <Card 
                className={styles.contentWrapper} 
                style={sm ? { width: 539, height:686 , borderRadius: 2 , paddingBlockStart:64, paddingInline:85.5, border:'none'}:
                            { width: 328, height:564 , borderRadius: 2 , paddingBlockStart:32, paddingInline:16, border:'none'} }
                >   
                    <LogoIcon style={sm ? {width:309, height:76, position:'relative', left:29} : 
                                            {width:203, height:50, position:'relative', left:47}}/>

                        <Tabs 
                            tabBarStyle={{display:'flex', justifyContent:'space-between', marginBottom:24}}
                            className={styles.tabs}
                            size={sm ? 'large' :'middle'}
                            defaultActiveKey="2" 
                            items={[
                            {
                                label: `Вход`,
                                key: '1',

                            },
                            {
                                label: `Регистрация`,
                                key: '2',
                                children: <Registration/>,
                            },
                            ]}
                        />
            </Card>
      </ServiceBackground>
    )
}