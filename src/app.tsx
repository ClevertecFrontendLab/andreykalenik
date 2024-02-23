import  React  from "react";
import { Provider } from 'react-redux';
import { Route, Routes} from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { ROUTER_PATHS } from './constants';

import { store, history } from '@redux/configure-store';
import { MainPage, AuthPage} from './pages';
import { ConfigProvider } from 'antd';
import { useLocalStorage } from 'usehooks-ts';


export const App:React.FC = () =>{

    useLocalStorage('LOCALSTORAGE_AUTH_TOKEN_KEY', '')

    return(
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
                <Router history={history}>
                        <Routes>
                            <Route index path={ROUTER_PATHS.MAIN} element={<MainPage />} />
                            <Route path={ROUTER_PATHS.AUTH} element={<AuthPage/>}/>
                        </Routes>
                </Router>
            </Provider>
        </ConfigProvider>
    )
}