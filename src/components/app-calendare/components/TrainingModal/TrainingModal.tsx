import { useEffect, useState } from 'react';
import classNames from 'classnames';
import type { Moment } from 'moment';
import { Grid, Modal } from 'antd';

import { ModalContent } from '../ModalContent';
import { ModalFooter } from '../ModalFooter';
import { ModalTitle } from '../ModalTitle';

import {
    currentTrainingSelector,
    isDrawerVisibleSelector,
    isEditModeSelector,
    isModalVisibleSelector,
} from '@utils/selectors';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

import styles from './TrainingModal.module.scss';
import { CalendareDrawer } from '@components/calendare-components/CalendareDrawer';
import { DATE_FORMAT } from '@utils/constants';
import { SelectedCellInfo } from '@components/app-calendare/AppCalendare';

type TrainingModalProps = {
    date: Moment;
    selectedCellInfo: SelectedCellInfo;
    closeModal: () => void;
    refetchUserTrainingList: () => void;
};

const { useBreakpoint } = Grid;

export const TrainingModal = ({
    date,
    selectedCellInfo,
    closeModal,
    refetchUserTrainingList,
}: TrainingModalProps) => {
    const [shouldAlignRight, setShouldAlignRight] = useState(false);

    const currentTraining = useAppSelector(currentTrainingSelector);
    const isModalVisible = useAppSelector(isModalVisibleSelector);
    const isDrawerVisible = useAppSelector(isDrawerVisibleSelector);
    const isEditMode = useAppSelector(isEditModeSelector);

    const { xs } = useBreakpoint();

    const { cellHTMLElement, cellContent } = selectedCellInfo;

    useEffect(() => {
        if (!xs) {
            const elementRect = cellHTMLElement.getBoundingClientRect();
            const elementRightOffset = window.innerWidth - elementRect.right;

            setShouldAlignRight(elementRightOffset < 300);
        }
    }, [cellHTMLElement, xs]);

    const workoutCardModalStyle = cellContent.length > 0;

    const modalStyles = classNames({
        [styles.modal]: true,
        [styles['position-left']]: !shouldAlignRight && !xs,
        [styles['position-right']]: shouldAlignRight && !xs,
        [styles['position-bottom']]: xs,
        [styles['workout-card-list']]: workoutCardModalStyle && !isEditMode,
        [styles['workout-card-empty']]: !workoutCardModalStyle && !isEditMode,
        [styles['workout-edit-list']]: currentTraining && isEditMode,
        [styles['workout-edit-empty']]: !currentTraining && isEditMode,
    });

    return (
        <>
            <Modal
                open={isModalVisible}
                mask={false}
                closable={false}
                getContainer={cellHTMLElement}
                width={xs ? 'calc(100% + 12px)' : 264}
                style={xs ? { top: 190, left: -6 } : {}}
                wrapClassName={modalStyles}
                destroyOnClose
                title={<ModalTitle date={date} cellContent={cellContent} closeModal={closeModal} />}
                footer={
                    <ModalFooter
                        date={date}
                        cellContent={cellContent}
                        refetchUserTrainingList={refetchUserTrainingList}
                    />
                }
                data-test-id={!isEditMode ? 'modal-create-training' : 'modal-create-exercise'}
                onCancel={closeModal}
            >
                <ModalContent date={date} />
            </Modal>
            <CalendareDrawer open={isDrawerVisible} date={date.format(DATE_FORMAT)} />
        </>
    );
};
