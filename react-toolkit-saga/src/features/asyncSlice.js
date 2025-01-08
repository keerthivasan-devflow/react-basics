import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const asyncSlice = createSlice({
  name: "users",
  initialState: {
    loading: true,
    data: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.data = [];
      state.error = "Error occured internally";
    });
  },
});

export default asyncSlice.reducer;
export { fetchUsers };
