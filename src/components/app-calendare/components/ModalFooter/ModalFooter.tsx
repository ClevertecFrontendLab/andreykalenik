import type { Moment } from 'moment';

import { Footer, FooterEdit } from './';

import { isEditModeSelector } from '@utils/selectors';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { TrainingResponse } from '../../../../services/trainingApi';

type ModalFooterProps = {
    date: Moment;
    cellContent: TrainingResponse[];
    refetchUserTrainingList: () => void;
};

export const ModalFooter = ({ date, cellContent, refetchUserTrainingList }: ModalFooterProps) => {
    const isEditMode = useAppSelector(isEditModeSelector);

    if (isEditMode) {
        return <FooterEdit date={date} refetchUserTrainingList={refetchUserTrainingList} />;
    }

    return <Footer date={date} cellContent={cellContent} />;
};
