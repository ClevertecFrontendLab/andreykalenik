import { createSlice } from '@reduxjs/toolkit';

type feedbackModal = {
    modalReview: boolean;
    modalSuccessTransfer: boolean;
    modalErrorTransfer: boolean;
    modalServerError: boolean;
    modalCalendareServerError: boolean;
};

const initialState: feedbackModal = {
    modalReview: false,
    modalSuccessTransfer: false,
    modalErrorTransfer: false,
    modalServerError: false,
    modalCalendareServerError: false,
};

const uiSlice = createSlice({
    name: 'ui',
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
        openModalCalendareServerError: (state) => {
            state.modalCalendareServerError = true;
        },
        closeModalCalendareServerError: (state) => {
            state.modalCalendareServerError = false;
        },
        hideAllModal: (state) => {
            state.modalReview = false;
            state.modalServerError = false;
            state.modalSuccessTransfer = false;
            state.modalErrorTransfer = false;
            state.modalCalendareServerError = false;
        },
    },
});

export const {
    toggleModalReview,
    toggleModalSuccessTransfer,
    toggleModalErrorTransfer,
    toggleModalServerError,
    openModalCalendareServerError,
    closeModalCalendareServerError,
    hideAllModal,
} = uiSlice.actions;
export default uiSlice.reducer;
