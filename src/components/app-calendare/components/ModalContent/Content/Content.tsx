import type { Moment } from 'moment';

import { TrainingList } from '@components/app-calendare/components/TrainingList';
import { filterTrainingsByDate } from '@utils/calendare/filterTrainingsByDate';
import { isPastDate } from '@utils/calendare/isPastDate';

import { EmptyCustom } from '../EmptyCustom';

import { userTrainingListSelector } from '@utils/selectors';
import {
    setCurrentTraining,
    setEditMode,
    setEditTraining,
    setTypeTraining,
} from '@redux/reducers/trainingSlice';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { TrainingResponse } from '../../../../../services/trainingApi';

export const Content = ({ date }: { date: Moment }) => {
    const userTrainingListData = useAppSelector(userTrainingListSelector);
    const dispatch = useAppDispatch();

    const trainingList = filterTrainingsByDate(userTrainingListData, date);

    const onClickEditTraining = (item: TrainingResponse) => {
        dispatch(setTypeTraining(item.name));
        dispatch(setCurrentTraining(item.exercises));
        dispatch(setEditMode(true));

        const editTrainingDay = isPastDate(date) ? 'past-training' : 'future-training';

        dispatch(
            setEditTraining({
                type: editTrainingDay,
                id: item._id,
            }),
        );
    };

    if (trainingList.length > 0) {
        return <TrainingList data={trainingList} onClickEditTraining={onClickEditTraining} />;
    }

    return <EmptyCustom description='Нет активных тренировок' />;
};
