import type { RootState } from '@redux/configure-store';

export const selectLoadingMutation = (state: RootState) =>
    Object.values(state.api.mutations).some((query) => query?.status === 'pending');
export const selectLoadingQuery = (state: RootState) =>
    Object.values(state.api.queries).some((query) => query?.status === 'pending');

export const selectUserData = (state: RootState) => state.user;
export const selectAccessToken = (state: RootState) => state.user.accessToken;

export const selectModalReview = (state: RootState) => state.ui.modalReview;
export const selectModalSuccessTransfer = (state: RootState) => state.ui.modalSuccessTransfer;
export const selectModalErrorTransfer = (state: RootState) => state.ui.modalErrorTransfer;
export const selectModalServerError = (state: RootState) => state.ui.modalServerError;
export const selectModalCalendareServerError = (state: RootState) =>
    state.ui.modalCalendareServerError;

export const selectFeedbackRating = (state: RootState) => state.feedback.rating;
export const selectFeedbackMessage = (state: RootState) => state.feedback.message;

export const userTrainingListSelector = (state: RootState) => state.trainingSlice.userTrainingList;
export const userTrainingListErrorSelector = (state: RootState) =>
    state.trainingSlice.userTrainingListError;
export const isModalVisibleSelector = (state: RootState) => state.trainingSlice.isModalVisible;
export const isEditModeSelector = (state: RootState) => state.trainingSlice.isEditMode;
export const editTrainingSelector = (state: RootState) => state.trainingSlice.editTraining;
export const isDrawerVisibleSelector = (state: RootState) => state.trainingSlice.isDrawerVisible;
export const typeTrainingSelector = (state: RootState) => state.trainingSlice.typeTraining;
export const currentTrainingSelector = (state: RootState) => state.trainingSlice.currentTraining;

export const catalogTrainingListSelector = (state: RootState) =>
    state.catalogSlice.catalogTrainingList;
