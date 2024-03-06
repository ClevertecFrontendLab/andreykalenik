import type { RootState } from '@redux/configure-store';

export const selectUserData = (state: RootState) => state.user;
export const selectAccessToken = (state: RootState) => state.user.accessToken;

export const selectModalReview = (state: RootState) => state.ui.modalReview;
export const selectModalSuccessTransfer = (state: RootState) => state.ui.modalSuccessTransfer;
export const selectModalErrorTransfer = (state: RootState) => state.ui.modalErrorTransfer;
export const selectModalServerError = (state: RootState) => state.ui.modalServerError;

export const selectFeedbackRating = (state: RootState) => state.feedback.rating;
export const selectFeedbackMessage = (state: RootState) => state.feedback.message;
