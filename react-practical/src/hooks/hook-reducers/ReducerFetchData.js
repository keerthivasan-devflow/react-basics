import React, { useEffect, useReducer } from "react";
import axios from "axios";

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
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, []);

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
