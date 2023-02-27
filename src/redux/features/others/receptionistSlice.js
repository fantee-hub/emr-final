import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  receptionist: []
};

export const receptionistSlice = createSlice({
  name: 'receptionist',
  initialState,
  reducers: {
    receptionist_info: (state, action) => {
      state.receptionist = action.payload;
    }
  }
});

export default receptionistSlice.reducer;
export const { receptionist_info } = receptionistSlice.actions;
