import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom';

import { store } from '@redux/configure-store';
import { MainPage, AuthPage} from './pages';
import { PrivateRouter } from './utils'
import { ConfigProvider } from 'antd';


import 'normalize.css';
import './index.css';




const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <ConfigProvider theme={{
            
            token:{
                fontFamily:'Inter',
                lineHeight: 1.3,
                colorPrimary:'#2f54eb',
                colorText:"#262626",
                colorTextSecondary:"#8C8C8C",
                colorLink:"#2f54eb",
                colorErrorText:"#262626"
            },
            components:{
                Card:{
                    borderRadiusLG:2,
                    borderRadiusSM:2,
                    borderRadiusXS:2,
                    borderRadiusOuter:2,
                    colorBorder:'none'
                },
                Input:{
                    borderRadius:2,
                    borderRadiusLG:2,
                    borderRadiusSM:2,
                    borderRadiusXS:2,
                    borderRadiusOuter:2,
                    fontSize:14,
                    fontSizeLG:14,
                    fontSizeSM:14,
                    fontSizeXL:14,
                },
                Button:{
                    borderRadius:2,
                    borderRadiusLG:2,
                    borderRadiusSM:2,
                    borderRadiusXS:2,
                    borderRadiusOuter:2,
                }
            
            }
            
        }}>
            <Provider store={store}>
                <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<PrivateRouter/>}>
                                <Route path='main' element={<MainPage />} />
                            </Route>
                            <Route path='auth' element={<AuthPage/>}/>
                        </Routes>
                </BrowserRouter>
            </Provider>
        </ConfigProvider>
    </React.StrictMode>,
);


