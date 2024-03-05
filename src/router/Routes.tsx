import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

import { MainPage, AuthPage, ResultPage } from '../pages';
import { MainLayout } from '@components/main-layout';
import { FeedbackLayout } from '@components/feedback-layout';
import { PrivateRoute } from './PrivateRoute';
import { ConfirmEmail } from '@components/confirm-email';
import { ChangePassword } from '@components/change-password';
import { Path } from '../utils/constants';

export const routes = (
    <Routes>
        <Route path={Path.ROOT} element={<Outlet />}>
            <Route path={Path.AUTH} element={<AuthPage />} />
            <Route path={Path.REGISTRATION} element={<AuthPage />} />
            <Route element={<PrivateRoute />}>
                <Route path={Path.CONFIRM_EMAIL} element={<ConfirmEmail />} />
                <Route path={Path.CHANGE_PASSWORD} element={<ChangePassword />} />
                <Route
                    path={Path.RESULT_ERROR_LOGIN}
                    element={<ResultPage result='error-login' />}
                />
                <Route path={Path.RESULT_SUCCESS} element={<ResultPage result='success' />} />
                <Route path={Path.RESULT_ERROR} element={<ResultPage result='error' />} />
                <Route
                    path={Path.RESULT_ERROR_USER_EXIST}
                    element={<ResultPage result='error-user-exist' />}
                />
                <Route
                    path={Path.RESULT_ERROR_EMAIL_NO_EXIST}
                    element={<ResultPage result='error-check-email-no-exist' />}
                />
                <Route
                    path={Path.RESULT_SUCCESS_CHANGE_PASSWORD}
                    element={<ResultPage result='success-change-password' />}
                />
                <Route
                    path={Path.RESULT_ERROR_CHANGE_PASSWORD}
                    element={<ResultPage result='error-change-password' />}
                />
                <Route
                    path={Path.RESULT_ERROR_CHECK_EMAIL}
                    element={<ResultPage result='error-check-email' />}
                />
                <Route element={<MainPage />}>
                    <Route path={Path.MAIN} element={<MainLayout />} />
                    <Route path={Path.FEEDBACKS} element={<FeedbackLayout />} />
                </Route>
            </Route>
            <Route path={Path.ROOT} element={<Navigate to={Path.AUTH} />} />
        </Route>
    </Routes>
);
