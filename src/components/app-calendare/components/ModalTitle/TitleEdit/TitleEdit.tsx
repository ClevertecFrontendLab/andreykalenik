import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { filterOutTrainingTypesForDay } from '@utils/calendare/filterOutTrainingTypesForDay';

import {
    catalogTrainingListSelector,
    editTrainingSelector,
    typeTrainingSelector,
} from '@utils/selectors';
import {
    resetEditMode,
    setCurrentTraining,
    setEditTraining,
    setTypeTraining,
} from '@redux/reducers/trainingSlice';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { TrainingResponse } from '../../../../../services/trainingApi';

import styles from './TitleEdit.module.scss';

type SelectOption = {
    label: string;
    value: string;
};

export const TitleEdit = ({ cellContent }: { cellContent: TrainingResponse[] }) => {
    const trainingListData = useAppSelector(catalogTrainingListSelector);
    const typeTraining = useAppSelector(typeTrainingSelector);
    const editTraining = useAppSelector(editTrainingSelector);
    const dispatch = useAppDispatch();

    const [filteredTrainingList, setFilteredTrainingList] = useState<SelectOption[]>([]);

    const isPastTraining = editTraining?.type === 'past-training';

    useEffect(() => {
        const filteredTraining = filterOutTrainingTypesForDay(
            cellContent,
            trainingListData,
            isPastTraining,
        );
        setFilteredTrainingList(filteredTraining);
    }, [cellContent, isPastTraining, trainingListData]);

    const handleChange = (_: string, option: SelectOption | SelectOption[]) => {
        const currentOption = Array.isArray(option) ? option[0].label : option.label;
        dispatch(setTypeTraining(currentOption));
        dispatch(setCurrentTraining(null));
        dispatch(setEditTraining(null));
    };

    const closeEditMode = () => dispatch(resetEditMode());

    return (
        <>
            <ArrowLeftOutlined
                onClick={closeEditMode}
                data-test-id='modal-exercise-training-button-close'
            />
            <Select
                autoFocus
                options={filteredTrainingList}
                defaultValue={typeTraining ?? 'Выбор типа тренировки'}
                onChange={handleChange}
                className={styles.select}
                data-test-id='modal-create-exercise-select'
            />
        </>
    );
};
