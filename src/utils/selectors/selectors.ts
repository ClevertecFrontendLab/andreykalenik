import type {RootState} from '@redux/configure-store'

export const selectUserData  = (state:RootState) => state.user.UserData

export const selectModalReview  = (state:RootState) => state.feedbackModal.modalReview
export const selectModalSuccessTransfer  = (state:RootState) => state.feedbackModal.modalSuccessTransfer
export const selectModalErrorTransfer  = (state:RootState) => state.feedbackModal.modalErrorTransfer
export const selectModalServerError  = (state:RootState) => state.feedbackModal.modalServerError

export const selectFeedbackRating  = (state:RootState) => state.feedback.rating
export const selectFeedbackMessage  = (state:RootState) => state.feedback.message