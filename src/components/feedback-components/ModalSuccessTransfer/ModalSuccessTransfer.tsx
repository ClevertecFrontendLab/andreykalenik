import { Button, Modal, Grid, Result } from 'antd';
import { selectModalSuccessTransfer } from '@utils/selectors/selectors';
import { toggleModalSuccessTransfer } from '@redux/reducers/uiSlice';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useNavigate } from 'react-router-dom';
import { Path } from '@utils/constants';

const { useBreakpoint } = Grid;

export const ModalSuccessTransfer = () => {
    const { sm } = useBreakpoint();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleClick = () => {
        navigate(Path.FEEDBACKS, { replace: true });
        dispatch(toggleModalSuccessTransfer());
    };
    return (
        <Modal
            closable={false}
            centered
            open={useAppSelector(selectModalSuccessTransfer)}
            footer={null}
            mask={true}
            maskClosable={true}
            maskStyle={{ backdropFilter: 'blur(5px)', background: '#799cd480' }}
            width={sm ? 539 : 328}
        >
            <Result
                status='success'
                title='Отзыв успешно опубликован'
                extra={
                    <Button
                        type='primary'
                        size='large'
                        onClick={handleClick}
                        style={sm ? { width: 368, fontSize: 14 } : { width: '100%', fontSize: 14 }}
                    >
                        Отлично
                    </Button>
                }
            />
        </Modal>
    );
};
