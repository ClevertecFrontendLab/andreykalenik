import { Button, Modal, Grid, Result } from 'antd';

import { selectModalServerError } from '@utils/selectors/selectors';
import { toggleModalServerError } from '@redux/reducers/uiSlice';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useNavigate } from 'react-router-dom';
import { Path } from '@utils/constants';

const { useBreakpoint } = Grid;

export const ModalServerError = () => {
    const { sm } = useBreakpoint();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(Path.MAIN);
        dispatch(toggleModalServerError());
    };

    return (
        <Modal
            open={useAppSelector(selectModalServerError)}
            footer={null}
            centered
            closable={false}
            mask={true}
            maskClosable={true}
            maskStyle={{ backdropFilter: 'blur(5px)', background: '#799cd480' }}
            width={sm ? 539 : 328}
        >
            <Result
                status='500'
                title='Что-то пошло не так'
                subTitle='Произошла ошибка, попробуйте ещё раз.'
                extra={
                    <Button
                        type='primary'
                        onClick={handleClick}
                        style={
                            sm
                                ? {
                                      width: 142,
                                      marginBlock: 20,
                                      marginInline: 'calc(50% - calc(142px / 2))',
                                      fontSize: 14,
                                  }
                                : { width: '100%', marginBlock: 20, fontSize: 14 }
                        }
                    >
                        Назад
                    </Button>
                }
            />
        </Modal>
    );
};
