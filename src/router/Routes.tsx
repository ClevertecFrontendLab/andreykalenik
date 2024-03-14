import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

import { MainPage, AuthPage, ResultPage, AppLayout } from '../pages';

import { FeedbackLayout } from '@components/feedback-layout';
import { PrivateRoute } from './PrivateRoute';
import { ConfirmEmail } from '@components/confirm-email';
import { ChangePassword } from '@components/change-password';
import { Path } from '../utils/constants';
import { AppLoader } from '@components/app-loader';

export const routes = (
    <Routes>
        <Route path={Path.ROOT} element={<Navigate to={Path.AUTH} />} />
        <Route path={Path.AUTH} element={<AuthPage />} />
        <Route path={Path.REGISTRATION} element={<AuthPage />} />
        <Route element={<PrivateRoute />} >
            <Route path={Path.ROOT} element={<Navigate to={Path.MAIN} />} />
            <Route path={Path.MAIN} element={<AppLayout />}>
                <Route index element={<MainPage />}/>
            </Route>
            <Route path={Path.FEEDBACKS} element={<AppLayout />}>
                <Route index element={<FeedbackLayout />}/>
            </Route>
        </Route>
    </Routes>
);
