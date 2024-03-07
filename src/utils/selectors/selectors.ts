import type { RootState } from "@redux/configure-store";

export const selectUserData = (state: RootState) => state.user;
export const selectAccessToken = (state: RootState) => state.user.accessToken;

export const selectModalReview = (state: RootState) => state.ui.modalReview;
export const selectModalSuccessTransfer = (state: RootState) => state.ui.modalSuccessTransfer;
export const selectModalErrorTransfer = (state: RootState) => state.ui.modalErrorTransfer;
export const selectModalServerError = (state: RootState) => state.ui.modalServerError;

export const selectFeedbackRating = (state: RootState) => state.feedback.rating;
export const selectFeedbackMessage = (state: RootState) => state.feedback.message;

export const selectLoadingMutation = (state: RootState) =>
    Object.values(state.api.mutations).some((query) => query?.status === "pending");

export const selectLoadingQuery = (state: RootState) =>
    Object.values(state.api.queries).some((query) => query?.status === "pending");
