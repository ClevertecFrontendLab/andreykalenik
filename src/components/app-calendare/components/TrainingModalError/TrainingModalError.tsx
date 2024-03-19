import { Button, Grid, Modal, Space, Typography } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';

import { TYPE_ERROR_CATALOG, TYPE_ERROR_SAVE } from '@constants/training/trainingTypesErrorModal';

import styles from './TrainingModalError.module.scss';

type TrainingModalErrorProps = {
    type: typeof TYPE_ERROR_CATALOG | typeof TYPE_ERROR_SAVE;
    open: boolean;
    onCancel: () => void;
    onClickButton: () => void;
};

const { useBreakpoint } = Grid;

const TRAINING_ERROR_MODAL_CONTENT = {
    ['error-catalog']: {
        width: 384,
        closable: true,
        className: 'error-no-catalog',
        title: 'При открытии данных произошла ошибка',
        subtitle: 'Попробуйте ещё раз.',
        buttonText: 'Обновить',
        buttonSize: 'middle',
    },
    ['error-save']: {
        width: 416,
        closable: false,
        className: 'error-save',
        title: 'При сохранении данных произошла ошибка',
        subtitle: 'Придётся попробовать ещё раз',
        buttonText: 'Закрыть',
        buttonSize: 'large',
    },
};

export const TrainingModalError = ({
    type,
    open,
    onCancel,
    onClickButton,
}: TrainingModalErrorProps) => {
    const { closable, className, title, subtitle, buttonText, buttonSize } =
        TRAINING_ERROR_MODAL_CONTENT[type];
    const { sm } = useBreakpoint();

    return (
        <Modal
            open={open}
            width={sm ? 416 : 328}
            closable={closable}
            onCancel={onCancel}
            centered={true}
            footer={null}
            maskStyle={{ backdropFilter: 'blur(4px)', background: 'rgba(121, 156, 212, 0.5)' }}
            closeIcon={<CloseOutlined data-test-id='modal-error-user-training-button-close' />}
            data-test-id='modal-no-review'
            className={styles[className]}
        >
            <Space size={16} align='start'>
                <CloseCircleOutlined />
                <div className={styles['content-text']}>
                    <Typography.Title
                        level={2}
                        data-test-id='modal-error-user-training-title'
                        className={styles['content-text-title']}
                    >
                        {title}
                    </Typography.Title>
                    <Typography.Paragraph
                        data-test-id='modal-error-user-training-subtitle'
                        className={styles['content-text-subtitle']}
                    >
                        {subtitle}
                    </Typography.Paragraph>
                </div>
            </Space>
            <div className={styles['content-wrapper-button']}>
                <Button
                    data-test-id='modal-error-user-training-button'
                    type='primary'
                    onClick={onClickButton}
                    className={styles['content-button']}
                    size={buttonSize as SizeType}
                >
                    {buttonText}
                </Button>
            </div>
        </Modal>
    );
};
