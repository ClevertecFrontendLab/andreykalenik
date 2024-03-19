import { Button, List, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { EmptyCustom } from '../EmptyCustom';

import { currentTrainingSelector } from '@utils/selectors';
import { setDrawerVisible } from '@redux/reducers/trainingSlice';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

export const ContentEdit = () => {
    const currentTraining = useAppSelector(currentTrainingSelector);
    const dispatch = useAppDispatch();

    const openDrawer = () => dispatch(setDrawerVisible(true));

    if (!currentTraining) {
        return <EmptyCustom />;
    }

    return (
        <List
            bordered={false}
            dataSource={currentTraining}
            split={false}
            renderItem={(item, index) => (
                <List.Item>
                    <Typography.Text>{item.name}</Typography.Text>
                    <Button
                        type='link'
                        icon={
                            <EditOutlined
                                data-test-id={`modal-update-training-edit-button${index}`}
                            />
                        }
                        onClick={openDrawer}
                    />
                </List.Item>
            )}
        />
    );
};
