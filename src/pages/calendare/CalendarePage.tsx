import { useEffect, useState } from 'react';
import { push } from 'redux-first-history';

import { TrainingModalError } from '@components/app-calendare/components/TrainingModalError';
import { useLazyGetCatalogTrainingListQuery } from '../../services/catalogsApi';
import { useLazyGetUserTrainingDataQuery } from '../../services/trainingApi';
import { setCatalogTrainingList } from '@redux/reducers/catalogsSlice';
import { setUserTrainingList } from '@redux/reducers/trainingSlice';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { TYPE_ERROR_CATALOG } from '@constants/training/trainingTypesErrorModal';

import styles from './CalendarePage.module.scss';
import { Path } from '@utils/constants';
import { AppCalendare } from '@components/app-calendare';

export const CalendarPage = () => {
    const [getUserTrainingList, { data: userTrainingList, isError: isErrorUserTrainingList }] =
        useLazyGetUserTrainingDataQuery();

    const [
        getCatalogTrainingList,
        { data: catalogTrainingList, isError: isErrorCatalogTrainingList },
    ] = useLazyGetCatalogTrainingListQuery();

    const [catalogTrainingError, setCatalogTrainingError] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        getUserTrainingList();
    }, [getUserTrainingList]);

    useEffect(() => {
        if (isErrorUserTrainingList) {
            dispatch(push(Path.MAIN));
        }
        if (userTrainingList) {
            dispatch(setUserTrainingList(userTrainingList));
            getCatalogTrainingList();
        }
    }, [userTrainingList, isErrorUserTrainingList, dispatch, getCatalogTrainingList]);

    useEffect(() => {
        if (isErrorCatalogTrainingList) {
            setCatalogTrainingError(true);
        }
        if (catalogTrainingList) {
            dispatch(setCatalogTrainingList(catalogTrainingList));
            setCatalogTrainingError(false);
        }
    }, [dispatch, isErrorCatalogTrainingList, catalogTrainingList]);

    const closeModalErrorTraining = () => {
        dispatch(setUserTrainingList([]));
        setCatalogTrainingError(false);
    };

    const retryFetchCatalogTrainingList = () => getCatalogTrainingList();

    return (
        <div className={styles.calendarWrapper}>
            <AppCalendare refetchUserTrainingList={getUserTrainingList} />
            <TrainingModalError
                type={TYPE_ERROR_CATALOG}
                open={catalogTrainingError}
                onCancel={closeModalErrorTraining}
                onClickButton={retryFetchCatalogTrainingList}
            />
        </div>
    );
};
