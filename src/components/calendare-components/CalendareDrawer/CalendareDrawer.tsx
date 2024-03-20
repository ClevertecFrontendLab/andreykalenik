import { Button, Drawer, Grid } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { DrawerFooter, DrawerForm, DrawerTitle } from './';

import { editTrainingSelector } from '@utils/selectors';
import { setDrawerVisible } from '@redux/reducers/trainingSlice';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

import styles from './CalendareDrawer.module.scss';

type CalendareDrawerProps = {
    open: boolean;
    date: string;
};

const { useBreakpoint } = Grid;

export const CalendareDrawer = ({ open, date }: CalendareDrawerProps) => {
    const editTraining = useAppSelector(editTrainingSelector);
    const dispatch = useAppDispatch();

    const { xs } = useBreakpoint();

    const onCloseDrawer = () => dispatch(setDrawerVisible(false));

    const isPastTraining = editTraining?.type === 'past-training';

    return (
        <Drawer
            data-test-id='modal-drawer-right'
            placement={!xs ? 'right' : 'bottom'}
            onClose={onCloseDrawer}
            open={open}
            mask={false}
            width={!xs ? 408 : '100%'}
            closable={false}
            destroyOnClose
            className={styles['drawer']}
            height=''
            title={<DrawerTitle date={date} />}
            footer={isPastTraining ? <DrawerFooter /> : null}
            extra={
                <Button
                    key='submit-drawer-form'
                    htmlType='submit'
                    size='small'
                    type='text'
                    form='drawer-form'
                    icon={<CloseOutlined className='drawer-close-icon' />}
                    data-test-id='modal-drawer-right-button-close'
                />
            }
        >
            <DrawerForm onCloseDrawer={onCloseDrawer} />
        </Drawer>
    );
};
