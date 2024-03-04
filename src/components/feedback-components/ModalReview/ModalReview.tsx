import { useEffect, useState } from 'react'
import { Button, Modal, Grid } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Rating from '@components/rating/rating';
import { selectModalReview, selectFeedbackRating, selectFeedbackMessage } from '@utils/selectors/selectors';
import { toggleModalReview, toggleModalErrorTransfer, toggleModalSuccessTransfer } from '@redux/reducers/feedbackModalSlice';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setRating, setMessage } from '@redux/reducers/feedbackSlice';
import { useCreateReviewMutation } from '@redux/reducers/feedbackApi';


const { useBreakpoint } = Grid;

export const ModalReview = () => {
    const dispatch = useAppDispatch();
    const [isBtnDisable, setIsBtnDisable] = useState(true);
    const { sm } = useBreakpoint()
    const [createReview, {isError, isSuccess} ] = useCreateReviewMutation();

    const message = useAppSelector(selectFeedbackMessage)
    const rating =  useAppSelector(selectFeedbackRating)

    const handleSubmitReview =  () => {
        createReview({ message, rating})
        dispatch(toggleModalReview())
    }
  
    useEffect(()=>{
        dispatch(toggleModalErrorTransfer())
    }, [isError])

    useEffect(()=>{
        dispatch(toggleModalSuccessTransfer())
    }, [isSuccess])

    return (
        <Modal
            title='Ваш отзыв'
            centered
            open={useAppSelector(selectModalReview)}
            footer={
                <Button
                    disabled={isBtnDisable}
                    type='primary'
                    size='large'
                    onClick={handleSubmitReview}
                    data-test-id= 'new-review-submit-button'
                    style={sm ? 
                        {width: 130, fontSize: 14}:
                        {width: '100%', marginBlock: 20, fontSize: 14}
                    }
                >
                    Опубликовать
                </Button>
            }
            onOk={()=>dispatch(toggleModalReview())}
            onCancel={()=>dispatch(toggleModalReview())}
            mask={true}
            maskClosable={true}
            maskStyle={{backdropFilter:'blur(5px)', background:'#799cd480'}}
            width={539}
        >
            <Rating 
                rating={0}
                fontSize={22}
                isDisable={false}
                onChange={(value) => {
                    setIsBtnDisable(false)
                    dispatch(setRating(value))
                }}
                 />
            <TextArea
            style={{marginTop:12, borderRadius:2}}
                onChange={(e) => {
                    dispatch(setMessage(e.currentTarget.value));
                }}
                className='textarea_modal'
                autoSize={{ minRows: 2, maxRows: 20 }}
                placeholder='Расскажите, почему Вам понравилось наше приложение'
                onFocus={() => {
                    setIsBtnDisable(false);
                }}
            />
        </Modal>
    );
};

export default ModalReview;