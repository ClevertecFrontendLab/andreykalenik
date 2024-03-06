import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAppSelector } from '@hooks/typed-react-redux-hooks.ts';
import { prevLocationsSelector } from '@utils/selectors/selectors';
import { Path } from '@utils/constants';

export const ResultPage = () => {
    const location = useLocation();
    const prevLocations = useAppSelector(prevLocationsSelector);

    return !!location.state?.pathname && !!prevLocations ? (
        <>
            <Outlet />
        </>
    ) : (
        <Navigate to={Path.MAIN} />
    );
};
