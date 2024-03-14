import { Outlet, Navigate } from 'react-router-dom';
import { Path, TOKEN_ID } from '@utils/constants';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectAccessToken } from '@utils/selectors/selectors';

export const PrivateRoute = () => {
    const accessToken = useAppSelector(selectAccessToken);
    const isAuth = !!localStorage.getItem(TOKEN_ID) || !!sessionStorage.getItem(TOKEN_ID) || !!accessToken;
    return isAuth ? <Outlet /> : <Navigate to={Path.AUTH} replace />;
};
