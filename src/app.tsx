import  React  from "react";
import { Provider } from 'react-redux';
import { Route, Routes, Navigate, Outlet} from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { MainPage, AuthPage, ResultPage} from './pages';
import { ConfigProvider } from 'antd';
import { store, history } from '@redux/configure-store';
import { ROUTER_PATHS } from './utils/constants';
import { ConfirmEmail } from "@components/confirm-email";
import { ChangePassword } from "@components/change-password";



export const App:React.FC = () =>{


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
                    controlHeight:40,
                    
                },
                
                Button:{
                    borderRadius:2,
                    borderRadiusLG:2,
                    borderRadiusSM:2,
                    borderRadiusXS:2,
                    borderRadiusOuter:2,
                    controlHeight:40,
                    fontSize:16,
                },
            
            }
            
        }}>
            <Provider store={store}>
                <Router history={history}>
                    <Routes>
                         <Route path={ROUTER_PATHS.ROOT} element={<Outlet/>}> 
                            <Route
                                path={ROUTER_PATHS.AUTH}
                                element={<AuthPage/>}
                            /> 
                            <Route
                                path={ROUTER_PATHS.REGISTRATION}
                                element={<AuthPage/>}
                            />
                            <Route
                                path={ROUTER_PATHS.CONFIRM_EMAIL}
                                element={<ConfirmEmail/>}
                            />
                            <Route
                                path={ROUTER_PATHS.CHANGE_PASSWORD}
                                element={<ChangePassword/>}
                            />
                            <Route
                                path={ROUTER_PATHS.RESULT_ERROR_LOGIN}
                                element={<ResultPage result="error-login"/>}
                            />
                            <Route
                                path={ROUTER_PATHS.RESULT_SUCCESS}
                                element={<ResultPage result="success"/>}
                            />
                            <Route
                                path={ROUTER_PATHS.RESULT_ERROR}
                                element={<ResultPage result="error"/>}
                            />
                            <Route
                                path={ROUTER_PATHS.RESULT_ERROR_USER_EXIST}
                                element={<ResultPage result='error-user-exist'/>}
                            />
                            <Route
                                path={ROUTER_PATHS.RESULT_ERROR_EMAIL_NO_EXIST}
                                element={<ResultPage result='error-check-email-no-exist'/>}
                            />
                            <Route
                                path={ROUTER_PATHS.RESULT_SUCCESS_CHANGE_PASSWORD}
                                element={<ResultPage result='success-change-password'/>}
                            />
                            <Route
                                path={ROUTER_PATHS.RESULT_ERROR_CHANGE_PASSWORD}
                                element={<ResultPage result='error-change-password'/>}
                            />
                            <Route
                                path={ROUTER_PATHS.RESULT_ERROR_CHECK_EMAIL}
                                element={<ResultPage result='error-check-email'/>}
                            />
                            <Route path={ROUTER_PATHS.MAIN} element={<MainPage />} />
                            <Route path={ROUTER_PATHS.ROOT} element={<Navigate to={ROUTER_PATHS.AUTH} />} /> 
                        </Route>
                    </Routes>
                </Router>
            </Provider>
        </ConfigProvider>
    )
}