import React, { useEffect, useReducer } from "react";

function ReducerFetchData() {
  let initialState = {
    loading: true,
    error: "",
    users: [],
  };

  let reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          error: "",
          users: action.payload,
        };

      case "FETCH_FAILURE":
        return {
          loading: false,
          error: "Something went wrong...!",
          users: [],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_FAILURE" });
    }
  };

  let lists = state.users;
  return (
    <div>
      <h1>Fetching Datat using useReducer() Hook</h1>
      <ul>
        {state.loading
          ? "Loading now...."
          : lists.map((user) => <li key={user.id}>{user.username}</li>)}
      </ul>
      {state.error ? "Error Occured" : null}
    </div>
  );
}

export default ReducerFetchData;
