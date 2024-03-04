import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { useGetFeedbacksQuery } from "@redux/reducers/feedbackApi";
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { toggleModalServerError } from '@redux/reducers/feedbackModalSlice';

import { FirstReview, ModalReview, ModalServerError, ModalSuccessTransfer, ModalErrorTransfer, AllReviews } from '@components/feedback-components';
import { ROUTER_PATHS, TOKEN_ID } from '@utils/constants';





export const FeedbackLayout:React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { data, error, isError } = useGetFeedbacksQuery()
    
    useEffect(()=>{
        if(error){
            if('status' in error && error.status == 403){
                localStorage.removeItem(TOKEN_ID)
                navigate(ROUTER_PATHS.AUTH)
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

 