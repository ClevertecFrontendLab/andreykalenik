import type { Moment } from 'moment';
import { Button } from 'antd';

import { isPastDate } from '@utils/calendare/isPastDate';

import { catalogTrainingListSelector } from '@utils/selectors';
import { setEditMode } from '@redux/reducers/trainingSlice';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { TrainingResponse } from '../../../../../services/trainingApi';

type FooterProps = {
    cellContent: TrainingResponse[];
    date: Moment;
};

export const Footer = ({ date, cellContent }: FooterProps) => {
    const catalogTrainingList = useAppSelector(catalogTrainingListSelector);
    const dispatch = useAppDispatch();

    const openEditMode = () => dispatch(setEditMode(true));

    const disabledButton = cellContent.length === catalogTrainingList.length || isPastDate(date);

    return (
        <Button type='primary' block size='large' onClick={openEditMode} disabled={disabledButton}>
            Создать тренировку
        </Button>
    );
};
