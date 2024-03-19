import type { Moment } from 'moment';

import { Content, ContentEdit } from './';

import { isEditModeSelector } from '@utils/selectors';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { FC } from 'react';

type ModalContentProps = {
    date: Moment;
};

export const ModalContent: FC<ModalContentProps> = ({ date }) => {
    const isEditMode = useAppSelector(isEditModeSelector);

    if (isEditMode) {
        return <ContentEdit />;
    }

    return <Content date={date} />;
};
