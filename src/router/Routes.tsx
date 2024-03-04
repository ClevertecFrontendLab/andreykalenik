import { Route, Routes, Navigate, Outlet} from 'react-router-dom';

import { MainPage, AuthPage, ResultPage} from '../pages'
import { MainLayout } from '@components/main-layout'
import { FeedbackLayout } from '@components/feedback-layout'
import { PrivateRoute } from './PrivateRoute';
import { ConfirmEmail } from "@components/confirm-email"
import { ChangePassword } from "@components/change-password"
import { ROUTER_PATHS } from '../utils/constants'



export const routes = (
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
            <Route element={<PrivateRoute/>}>
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
            <Route element={<MainPage />}>
                <Route path={ROUTER_PATHS.MAIN} element={<MainLayout />} />
                    <Route path={ROUTER_PATHS.FEEDBACKS} element={<FeedbackLayout />} />
                </Route>
            </Route> 
            <Route
                path={ROUTER_PATHS.ROOT}
                element={<MainPage/>}
            />
        </Route>
    </Routes>
)