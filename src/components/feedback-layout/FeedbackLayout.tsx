import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { useAddReviewMutation, useGetFeedbacksQuery } from "../../services/feedbackApi";
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { toggleModalServerError, toggleModalErrorTransfer, toggleModalSuccessTransfer  } from '@redux/reducers/uiSlice';
import { setAccessToken } from '@redux/reducers/userSlice';
import { selectModalSuccessTransfer } from '@utils/selectors/selectors';

import { FirstReview, ModalReview, ModalServerError, ModalSuccessTransfer, ModalErrorTransfer, AllReviews } from '@components/feedback-components';
import { Path, TOKEN_ID } from '@utils/constants';




export const FeedbackLayout:React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const addReview = useAppSelector(selectModalSuccessTransfer)
 
    const { data, error, isError, refetch } = useGetFeedbacksQuery()
    

    useEffect(() => {
        refetch();
    }, [addReview]);

    useEffect(()=>{
        if(error){
            if('status' in error && error.status == 403){
                dispatch(setAccessToken(''))
                localStorage.removeItem(TOKEN_ID)
                navigate(Path.AUTH)
            }
        }
    }, [error])

    useEffect(()=>{
        dispatch(toggleModalServerError())
    }, [isError]) 




return(
    <>
        {
        data?.length === 0 ?
            <FirstReview/> : <AllReviews/>
        }
        <ModalReview/>
        <ModalServerError/>
        <ModalSuccessTransfer/>
        <ModalErrorTransfer/>
    </> 
    )

}

 