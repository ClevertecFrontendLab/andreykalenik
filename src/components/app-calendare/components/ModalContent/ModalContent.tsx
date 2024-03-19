import type { Moment } from 'moment';

import { Content, ContentEdit } from './';

import { isEditModeSelector } from '@utils/selectors';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

type ModalContentProps = {
    date: Moment;
};

export const ModalContent = ({ date }: ModalContentProps) => {
    const isEditMode = useAppSelector(isEditModeSelector);

    if (isEditMode) {
        return <ContentEdit />;
    }

    return <Content date={date} />;
};
