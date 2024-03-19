import { Space, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import type { Moment } from 'moment';

import { DATE_FORMAT } from '@utils/constants';

import styles from './Title.module.scss';
import { TrainingResponse } from '../../../../../services/trainingApi';

export type TitleProps = {
    date: Moment;
    closeModal: () => void;
    cellContent?: TrainingResponse[];
};

export const Title = ({ date, closeModal }: TitleProps) => {
    const formattedDate = date.format(DATE_FORMAT);

    return (
        <Space className={styles['modal-title']}>
            <Typography.Text>Тренировки на {formattedDate}</Typography.Text>
            <CloseOutlined onClick={closeModal} data-test-id='modal-create-training-button-close' />
        </Space>
    );
};
