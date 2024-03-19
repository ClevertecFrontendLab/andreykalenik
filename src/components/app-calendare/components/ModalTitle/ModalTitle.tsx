import { Title, TitleEdit } from './';

import { isEditModeSelector } from '@utils/selectors';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { TrainingResponse } from '../../../../services/trainingApi';
import { TitleProps } from './Title/Title';

export type ModalTitleProps = TitleProps & {
    cellContent: TrainingResponse[];
};

export const ModalTitle = ({ date, cellContent, closeModal }: ModalTitleProps) => {
    const isEditMode = useAppSelector(isEditModeSelector);

    if (isEditMode) {
        return <TitleEdit cellContent={cellContent} />;
    }

    return <Title date={date} closeModal={closeModal} />;
};
