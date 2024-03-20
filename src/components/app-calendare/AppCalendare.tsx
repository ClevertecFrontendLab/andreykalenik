import { MouseEvent, useState } from 'react';
import type { Moment } from 'moment';
import moment from 'moment';
import { Calendar, Grid } from 'antd';

import { TrainingList, TrainingModal } from './components';
import { DATE_FORMAT_DAY } from '@utils/constants';
import { PICKER_LOCALE } from './pickerLocale';
import { filterTrainingsByDate } from '../../utils/calendare/filterTrainingsByDate';

import { isModalVisibleSelector, userTrainingListSelector } from '@utils/selectors';
import { resetState, setModalVisible } from '@redux/reducers/trainingSlice';

import styles from './AppCalendare.module.scss';
import { TrainingResponse } from '../../services/trainingApi';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { SelectedCellInfo } from '@types/calendareTypes';
import { Nullebel } from '@types/commonTypes';

moment.updateLocale('ru', {
    week: {
        dow: 1,
    },
});

export type CalendarCustomProps = {
    refetchUserTrainingList: () => void;
};

const { useBreakpoint } = Grid;

export const AppCalendare = ({ refetchUserTrainingList }: CalendarCustomProps) => {
    const [selectedDate, setSelectedDate] = useState(moment());
    const [selectedCellInfo, setSelectedCellInfo] = useState<Nullebel<SelectedCellInfo>>(null);

    const userTrainingListData = useAppSelector(userTrainingListSelector);
    const isModalVisible = useAppSelector(isModalVisibleSelector);
    const dispatch = useAppDispatch();

    const { xs } = useBreakpoint();

    const onTrainingModalClose = () => dispatch(resetState());

    const handleCellClick = (event: MouseEvent, date: Moment, listWorkouts: TrainingResponse[]) => {
        onTrainingModalClose();

        const target = event.target;

        if (target instanceof HTMLElement) {
            setSelectedDate(date);

            const cellHTMLElement = target.closest('td');
            const bodyHTMLElement: HTMLDivElement | null = target.closest('.ant-picker-body');

            if (date.month() === selectedDate.month()) {
                if (!xs && cellHTMLElement instanceof HTMLTableCellElement) {
                    setSelectedCellInfo({
                        cellHTMLElement: cellHTMLElement,
                        cellContent: listWorkouts,
                    });
                } else if (bodyHTMLElement instanceof HTMLDivElement) {
                    setSelectedCellInfo({
                        cellHTMLElement: bodyHTMLElement,
                        cellContent: listWorkouts,
                    });
                }
                dispatch(setModalVisible(true));
            }
        }
    };

    const dateFullCellRender = (date: Moment) => {
        const trainingList = filterTrainingsByDate(userTrainingListData, date);

        const isUserTraningInSelectedDay = trainingList.length > 0;
        const isUserTrainingAndNotMobile = isUserTraningInSelectedDay && !xs;
        const formattedDate = date.format(DATE_FORMAT_DAY);

        const responsiveClassName = isUserTraningInSelectedDay && xs ? 'mobile-date' : '';

        const onCellClick = (event: React.MouseEvent) => {
            if (!xs) {
                event.stopPropagation();
            }

            handleCellClick(event, date, trainingList);
        };

        return (
            <div
                className={`ant-picker-cell-inner ant-picker-calendar-date ${responsiveClassName}`}
                onClick={onCellClick}
            >
                <div className='ant-picker-calendar-date-value'>{formattedDate}</div>
                <div className='ant-picker-calendar-date-content'>
                    {isUserTrainingAndNotMobile && (
                        <TrainingList data={trainingList} className={styles['cell-render-list']} />
                    )}
                </div>
            </div>
        );
    };

    const shouldShowTrainingModal = selectedCellInfo && isModalVisible;

    return (
        <>
            <Calendar
                locale={PICKER_LOCALE}
                dateFullCellRender={dateFullCellRender}
                className={styles.calendar}
                fullscreen={!xs}
            />

            {shouldShowTrainingModal && (
                <TrainingModal
                    date={selectedDate}
                    selectedCellInfo={selectedCellInfo}
                    closeModal={onTrainingModalClose}
                    refetchUserTrainingList={refetchUserTrainingList}
                />
            )}
        </>
    );
};
