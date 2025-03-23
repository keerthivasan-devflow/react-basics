import { createSlice } from "@reduxjs/toolkit";

const sagaSlice = createSlice({
  name: "data",
  initialState: { loading: false, data: null, error: null },
  reducers: {
    fetchDataRequested: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequested, fetchDataSuccess, fetchDataFailure} = sagaSlice.actions
export default sagaSlice.reducer