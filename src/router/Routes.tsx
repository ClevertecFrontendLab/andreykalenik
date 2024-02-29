
import { Route, Routes, Navigate, Outlet} from 'react-router-dom';
import { MainPage, AuthPage, ResultPage} from '../pages';
import { ROUTER_PATHS } from '../utils/constants';
import { ConfirmEmail } from "@components/confirm-email";
import { ChangePassword } from "@components/change-password";

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
)