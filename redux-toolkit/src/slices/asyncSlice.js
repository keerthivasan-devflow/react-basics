import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

const asyncSlice = createSlice({
  name: "users",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
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
const _fetchUsers = fetchUsers;
export { _fetchUsers as fetchUsers };
