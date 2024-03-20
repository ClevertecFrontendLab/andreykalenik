import { Typography } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';

import { BadgeCustom } from '@components/app-calendare/components/BadgeCustom';

import { editTrainingSelector, typeTrainingSelector } from '@utils/selectors';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

import styles from './DrawerTitle.module.scss';

export const DrawerTitle = ({ date }: { date: string }) => {
    const typeTraining = useAppSelector(typeTrainingSelector);
    const editTraining = useAppSelector(editTrainingSelector);

    const drawerTitle = editTraining ? 'Редактирование' : 'Добавление упражнений';

    return (
        <>
            <div className={styles['drawer-title']}>
                {!editTraining ? <PlusOutlined /> : <EditOutlined />}
                <Typography.Text>{drawerTitle}</Typography.Text>
            </div>
            <div className={styles['drawer-subtitle']}>
                {typeTraining && <BadgeCustom name={typeTraining} />}
                <Typography.Paragraph className='date'>{date}</Typography.Paragraph>
            </div>
        </>
    );
};
