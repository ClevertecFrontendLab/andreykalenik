import classNames from 'classnames';
import { Button, List } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { BadgeCustom } from '../BadgeCustom';

import { TrainingResponse } from '../../../../services/trainingApi';

type TrainingListProps = {
    data: TrainingResponse[];
    className?: string;
    onClickEditTraining?: (item: TrainingResponse) => void;
};

export const TrainingList = ({ data, className, onClickEditTraining }: TrainingListProps) => (
    <List
        bordered={false}
        dataSource={data}
        className={className}
        split={false}
        renderItem={(item, index) => {
            const listItemDisabledStyles = classNames({
                'list-item-disabled': item.isImplementation,
            });

            return (
                <List.Item className={listItemDisabledStyles}>
                    <BadgeCustom name={item.name} />
                    {onClickEditTraining && (
                        <Button
                            type='link'
                            icon={<EditOutlined style={{ fontSize: '16px' }} />}
                            data-test-id={`modal-update-training-edit-button${index}`}
                            disabled={item.isImplementation}
                            onClick={() => onClickEditTraining(item)}
                        />
                    )}
                </List.Item>
            );
        }}
    />
);
