import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.data.map((user) => user.email));
// });

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/users");
  return response.data.map((user) => user.email);
});

const asyncSlice = createSlice({
  name: "users",
  initialState: {
    loading: true,
    data: [],
    error: "",
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
