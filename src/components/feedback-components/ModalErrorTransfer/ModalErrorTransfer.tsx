import { Button, Modal, Grid, Result } from 'antd';
import { selectModalErrorTransfer } from '@utils/selectors/selectors';
import { toggleModalErrorTransfer} from '@redux/reducers/uiSlice';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';


const { useBreakpoint } = Grid;

export const ModalErrorTransfer = () =>{
    const { sm } = useBreakpoint()

    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(toggleModalErrorTransfer())  
    }
    return(
        <Modal
            closable={false}
            centered
            open={useAppSelector(selectModalErrorTransfer)}
            footer={null}
            mask={true}
            maskClosable={true}
            maskStyle={{backdropFilter:'blur(5px)', background:'#799cd480'}}
            width={sm ? 539 : 328}
            style={{padding: 0}}
        >
        <Result
            status='error'
            title='Данные не сохранились'
            subTitle= 'Что-то пошло не так. Попробуйте ещё раз.'
        />
        <div style={{display:'flex', gap:'16px', justifyContent:'center', marginTop:'24px', marginBottom:'24px'}}>
            <Button
                type='primary'
                size='large'
                data-test-id='write-review-not-saved-modal'
                onClick={handleClick}  
                style={sm ?
                    {width: 180, fontSize: 14} :
                    {width: 144, fontSize: 14}
                }                          
            >
                Написать отзыв
            </Button>
            <Button
            type='default'
            size='large'
            onClick={() => dispatch(toggleModalErrorTransfer())}  
            style={sm ?
                {width: 180, fontSize: 14} :
                {width: 144, fontSize: 14}
            }                          
            >
                Закрыть
            </Button>
        </div>
    </Modal>
    )
}