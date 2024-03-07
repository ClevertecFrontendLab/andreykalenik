import { createSlice } from "@reduxjs/toolkit";

type feedbackModal = {
    modalReview: boolean;
    modalSuccessTransfer: boolean;
    modalErrorTransfer: boolean;
    modalServerError: boolean;
};

const initialState: feedbackModal = {
    modalReview: false,
    modalSuccessTransfer: false,
    modalErrorTransfer: false,
    modalServerError: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleModalReview: (state) => {
            state.modalReview = !state.modalReview;
            if (state.modalErrorTransfer == true) {
                state.modalErrorTransfer = false;
            }
        },
        toggleModalSuccessTransfer: (state) => {
            state.modalSuccessTransfer = !state.modalSuccessTransfer;
        },
        toggleModalErrorTransfer: (state) => {
            state.modalErrorTransfer = !state.modalErrorTransfer;
        },
        toggleModalServerError: (state) => {
            state.modalServerError = !state.modalServerError;
        },
        hideAllModal: (state) => {
            state.modalReview = false;
            state.modalServerError = false;
            state.modalSuccessTransfer = false;
            state.modalErrorTransfer = false;
        },
    },
});

export const {
    toggleModalReview,
    toggleModalSuccessTransfer,
    toggleModalErrorTransfer,
    toggleModalServerError,
    hideAllModal,
} = uiSlice.actions;
export default uiSlice.reducer;
