import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from "./action";

const FetchUsers = () => {
  const { loading, data, error } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataRequest()); // Dispatch the request action to start loading

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();

        // Dispatch success or failure based on the result
        dispatch(fetchDataSuccess(result)); // Dispatch success with the fetched data
      } catch (err) {
        dispatch(fetchDataFailure(err.message)); // Dispatch failure if there's an error
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="border-2 p-3 w-[300px] flex flex-col gap-2">
      <h1 className="text-center font-semibold">Fetch Fake Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <ol className="p-6" style={{ listStyle: "decimal" }}>
          {data.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default FetchUsers;
