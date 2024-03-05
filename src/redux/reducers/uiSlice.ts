import { createSlice } from '@reduxjs/toolkit';


type feedbackModal= {
  modalReview: boolean,
  modalSuccessTransfer: boolean,
  modalErrorTransfer: boolean,
  modalServerError:boolean,

}


const initialState:feedbackModal = {
  modalReview: false,
  modalSuccessTransfer: false,
  modalErrorTransfer: false,
  modalServerError: false,

};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
      toggleModalReview: ( state ) => {
        state.modalReview = !state.modalReview
      },
      toggleModalSuccessTransfer: (state) => {
        state.modalSuccessTransfer = !state.modalSuccessTransfer
      },
      toggleModalErrorTransfer: (state) => {
        state.modalErrorTransfer = !state.modalErrorTransfer
      },
      toggleModalServerError: (state) => {
        state.modalServerError= !state.modalServerError
      },
    },
    
  });

export const {toggleModalReview, toggleModalSuccessTransfer, toggleModalErrorTransfer, toggleModalServerError } = uiSlice.actions;
export default uiSlice.reducer;